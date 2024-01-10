import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { DepartamentDto } from '@shared/service-proxies/departament/departament-dto';
import { DepartamentServiceProxy } from '@shared/service-proxies/departament/departament-service-proxy';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';
import { AppSessionService } from '@shared/session/app-session.service';

@Component({
  selector: 'app-info-resources-humans',
  templateUrl: './info-resources-humans.component.html',
  styleUrls: ['./info-resources-humans.component.css']
})
export class InfoResourcesHumansComponent extends AppComponentBase implements OnInit {
  
  idHash: any;
  resources: EmployeeDto;
  department: any;

  constructor(injector: Injector,
              private _employeeService: EmployeeServiceProxy,
              private _departmentService: DepartamentServiceProxy) { 
    super(injector);
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this._employeeService.get(this.idHash).subscribe((data: EmployeeDto) => {
      this.resources = data;
      this._departmentService.get(data.departamentId).subscribe((data: DepartamentDto) => {
        this.department = data.type
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
   
}
