import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponentBase } from '@shared/app-component-base';
import { EmployeeDto } from '@shared/service-proxies/employee/Employee-dto';
import { EmployeeServiceProxy } from '@shared/service-proxies/employee/employee-service-proxy';
import { InfoResourcesHumansComponent } from './info-resources-humans/info-resources-humans.component';
import { LayoutStoreService } from '@shared/layout/layout-store.service';
import { EditResourcesHumansComponent } from './edit-resources-humans/edit-resources-humans.component';

@Component({
  selector: 'app-resources-humans',
  templateUrl: './resources-humans.component.html',
  styleUrls: ['./resources-humans.component.css']
})
export class ResourcesHumansComponent extends AppComponentBase implements OnInit {
  firstStep: FormGroup;
  secondStep: FormGroup;
  displayedColumns: string[] = ['name', 'surname', 'email', 'actions'];
  dataSource: MatTableDataSource<EmployeeDto>;
  
  constructor(inector: Injector,
              private _employeeService: EmployeeServiceProxy,
              private _dialog: MatDialog,
              private _layoutStore: LayoutStoreService) {
    super(inector);
  }

  ngOnInit(): void {
    this.getAllResources();
  }
  
  getAllResources() {
    this._employeeService.getListByDepartamentId("ee514acb-773d-4af3-6006-08dc11112346").subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource(data.items.map(item => ({
          name: item.name,
          surname: item.surname,
          email: item.email,
          id: item.id,
        })));
      }
    )
  }

  openInfo(id: any) {
    this.toggleSidebar(true)
    const dialog = this._dialog.open(InfoResourcesHumansComponent, {
      width : '70%',
      height: '70%'
    });
    dialog.componentInstance.idHash = id;
    dialog.afterClosed().subscribe(() => {
      this.toggleSidebar(false);
      this.getAllResources();
    })
  }

  openEdit(id: any) {
    this.toggleSidebar(true)
    const dialog = this._dialog.open(EditResourcesHumansComponent, {
      width : '70%',
      height: '70%'
    });
    dialog.componentInstance.idHash = id;
    dialog.afterClosed().subscribe(() => {
      this.toggleSidebar(false);
      this.getAllResources();
    })
  }

  toggleSidebar(bool: boolean): void {
    this._layoutStore.setSidebarExpanded(bool);
  }

  deleteResources(id: any) {
    this._employeeService.delete(id).subscribe((data: any) => {
      this.notify.info(this.l('Deletado com sucesso'));
      this.getAllResources();
    })
  }
} 
