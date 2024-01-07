import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponentBase } from '@shared/app-component-base';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { CreateEmployeeDto } from '@shared/service-proxies/employee/create-employee-dto';
import { CreateEmployeeUserDto } from '@shared/service-proxies/employee/create-employee-user-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';
import { AccountServiceProxy, RegisterInput, RegisterOutput } from '@shared/service-proxies/service-proxies';
import { AzureStorageService } from '@shared/storageImages/azure-storage-service.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-resources-humans',
  templateUrl: './resources-humans.component.html',
  styleUrls: ['./resources-humans.component.css']
})
export class ResourcesHumansComponent extends AppComponentBase implements OnInit {
  firstFormGroup: FormGroup;

  model: RegisterInput = new RegisterInput();
  resources: CreateEmployeeDto = new CreateEmployeeDto();
  role: any;
  saving = false;

  constructor(injector: Injector,
    private _accountService: AccountServiceProxy,
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeServiceProxy,
    private _azureStorageService: AzureStorageService) {
    super(injector)
  }

  ngOnInit(): void {
    this.forms();
  }

  forms() {
    this.firstFormGroup = this._formBuilder.group({
      userName: [''],
      password: [''],
      name: ['', Validators.required],
      id: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      age: ['', Validators.required],
      dateOfBirth: [],
      ssn: ['', Validators.required],
      rg: ['', Validators.required],
      cep: ['', Validators.required],
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      numberOfHouse: ['', Validators.required],
      complement: ['', Validators.required],
      imageUrl: [''],
      truckId: [''],
      departamentId: ['2309aa71-146e-4343-3237-08dc0f374f8b', Validators.required],
      isActive: [true]
    });
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.resources.image = file;
    }
  }

  save(): void {
    this.saving = true;
    this.model.role = 'HumanResources';

    this._accountService
      .register(this.model)
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      ).subscribe((result: RegisterOutput) => {
        this._azureStorageService.uploadFile(this.resources.image).then(response => {
          new URL(response);
          this.resources.imageUrl = response;
          this.resources.name = this.model.name
          this.resources.email = this.model.emailAddress;
          this.resources.surname = this.model.surname;
          console.log(this.model);
          console.log(this.resources);
          
          const modelresources = new CreateEmployeeDto(this.resources);

          console.log(modelresources);
          
          this._employeeService.create(modelresources).subscribe((resourcesDto: EmployeeDto) => {
            this._employeeService.addUser(new CreateEmployeeUserDto({
              employeeId: resourcesDto.id,
              userId: result.userId
            })).subscribe((result: any) => {
              console.log(result);
            });
          });
        });
      });
  }
}
