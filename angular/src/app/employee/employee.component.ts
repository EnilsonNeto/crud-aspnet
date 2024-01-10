import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { PagedRequestDto } from '@shared/paged-listing-component-base';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';
import { BsModalService } from 'ngx-bootstrap/modal';

class PagedEmployeeRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends AppComponentBase implements OnInit {
  constructor(
    injector: Injector,
    private _employeeService: EmployeeServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  ngOnInit(): void {
      
  }

}
