import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';

@Component({
  selector: 'app-info-resources-humans',
  templateUrl: './info-resources-humans.component.html',
  styleUrls: ['./info-resources-humans.component.css']
})
export class InfoResourcesHumansComponent extends AppComponentBase implements OnInit {
  
  idHash: any;
  resources: EmployeeDto;
  constructor(injector: Injector,
              private _employeeService: EmployeeServiceProxy) { 
    super(injector);
  }

  ngOnInit(): void {
    console.log(this.idHash);
    this.getEmployee();
  }

  getEmployee() {
    this._employeeService.get(this.idHash).subscribe((data: EmployeeDto) => {
      console.log(data);
      
    })
  }
}
