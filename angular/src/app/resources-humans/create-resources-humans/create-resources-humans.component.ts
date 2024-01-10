import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AppComponentBase } from '@shared/app-component-base';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { CreateEmployeeDto } from '@shared/service-proxies/employee/create-employee-dto';
import { CreateEmployeeUserDto } from '@shared/service-proxies/employee/create-employee-user-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';
import { AccountServiceProxy, RegisterInput, RegisterOutput } from '@shared/service-proxies/service-proxies';
import { AzureStorageService } from '@shared/storageImages/azure-storage-service.service';
import * as moment from 'moment';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-create-resources-humans',
  templateUrl: './create-resources-humans.component.html',
  styleUrls: ['./create-resources-humans.component.css']
})
export class CreateResourcesHumansComponent extends AppComponentBase implements OnInit {
  firstFormGroup: FormGroup;

  model: RegisterInput = new RegisterInput();
  resources: CreateEmployeeDto = new CreateEmployeeDto();
  role: any;
  saving = false;
  @Output() onSave = new EventEmitter<any>();

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
      age: ['12', Validators.required],
      dateOfBirth: [Date, Validators.required],
      ssn: ['', Validators.required],
      rg: ['', Validators.required],
      cep: ['', Validators.required],
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      numberOfHouse: ['12', Validators.required],
      complement: ['', Validators.required],
      truckId: [''],
      departamentId: ['ee514acb-773d-4af3-6006-08dc11112346', Validators.required],
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
          this.resources.name = this.model.name
          this.resources.email = this.model.emailAddress;
          this.resources.surname = this.model.surname;
          const modelresources = new CreateEmployeeDto(this.resources);
          const forms = this.firstFormGroup.value;
          modelresources.dateOfBirth = forms.dateOfBirth;
          modelresources.age = forms.age;
          modelresources.departamentId = forms.departamentId;
          modelresources.dateOfBirth = forms.dateOfBirth;
          modelresources.isActive = forms.isActive;
          modelresources.imagesUrl = response;
          this._employeeService.create(modelresources).subscribe((resourcesDto: EmployeeDto) => {
            this._employeeService.addUser(new CreateEmployeeUserDto({
              employeeId: resourcesDto.id,
              userId: result.userId
            })).subscribe((result: any) => {
              this.notify.info(this.l('SavedSuccessfully'));
              this.onSave.emit();
            });
          });
        });
      });
  }
}
