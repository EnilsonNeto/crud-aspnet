import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponentBase } from '@shared/app-component-base';
import { DepartamentDto } from '@shared/service-proxies/departament/departament-dto';
import { DepartamentServiceProxy } from '@shared/service-proxies/departament/departament-service-proxy';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { CreateEmployeeDto } from '@shared/service-proxies/employee/create-employee-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';

@Component({
  selector: 'app-edit-resources-humans',
  templateUrl: './edit-resources-humans.component.html',
  styleUrls: ['./edit-resources-humans.component.css']
})
export class EditResourcesHumansComponent extends AppComponentBase implements OnInit {
  
  idHash: any;
  resources: EmployeeDto;
  updatedResources: EmployeeDto;
  department: any;
  firstForm: FormGroup;

  constructor(injector: Injector,
              private _employeeService: EmployeeServiceProxy,
              private _departmentService: DepartamentServiceProxy,
              private _formBuilder: FormBuilder,) { 
    super(injector);
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  forms() {
    this.firstForm = this._formBuilder.group({
      name: [''],
      id: [''],
      surname: [''],
      email: [''],
      phoneNumber: [''],
      age: [''],
      dateOfBirth: [''],
      ssn: [''],
      rg: [''],
      cep: [''],
      street: [''],
      neighborhood: [''],
      numberOfHouse: [''],
      complement: [''],
      departamentId: ['ee514acb-773d-4af3-6006-08dc11112346'],
      isActive: [true]
    });
   
    this.firstForm.patchValue({
      id: this.resources.id,
      imagesUrl: this.resources.imagesUrl,
      name: this.resources.name,
      surname: this.resources.surname,
      email: this.resources.email,
      phoneNumber: this.resources.phoneNumber,
      age: this.resources.age,
      dateOfBirth: this.resources.dateOfBirth,
      ssn: this.resources.ssn,
      rg: this.resources.rg,
      cep: this.resources.cep,
      street: this.resources.street,
      neighborhood: this.resources.neighborhood,
      numberOfHouse: this.resources.numberOfHouse,
      complement: this.resources.complement,
      departamentId: this.resources.departamentId,
      isActive: this.resources.isActive
    });
   }

  getEmployee() {
    this._employeeService.get(this.idHash).subscribe((data: EmployeeDto) => {
      this.resources = data;
      this._departmentService.get(data.departamentId).subscribe((data: DepartamentDto) => {
        this.department = data.type
        this.forms();
      })
    })
  }

  formatPhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) return '';
    let cleaned = ('' + phoneNumber).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
   }

   formatCpf(cpf: string): string {
    if (!cpf) return '';
    let cleaned = ('' + cpf).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
     return match[1] + '.' + match[2] + '.' + match[3] + '-' + match[4];
    }
    return null;
   }

   formatCep(cep: string): string {
    if (!cep) return '';
    let cleaned = ('' + cep).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{5})(\d{3})$/);
    if (match) {
    return match[1] + '-' + match[2];
    }
    return null;
   }
   
   edit() {
    if (this.firstForm && this.firstForm.valid) {
      const form = this.firstForm.value;
      this.resources = form;
      console.log(this.resources);
   
      this._employeeService.update(this.resources).subscribe((data: any) => {
        console.log(data);
        
      })
    }
   }
}
