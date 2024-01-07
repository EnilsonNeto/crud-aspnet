import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { TruckComponent } from './truck/truck.component';
import { EmployeeComponent } from './employee/employee.component';
import { ResourcesHumansComponent } from './resources-humans/resources-humans.component';
import { DriverComponent } from './driver/driver.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'truck', component: TruckComponent, data: { permission: 'Pages.Trucks' }, canActivate: [AppRouteGuard] },
                    { path: 'employees', component: EmployeeComponent, data: { permission: 'Pages.Employees' }, canActivate: [AppRouteGuard] },
                    { path: 'drivers', component: DriverComponent, data: { permission: 'Pages.Trucks' }, canActivate: [AppRouteGuard] },
                    { path: 'departaments', component: ResourcesHumansComponent, data: { permission: 'Pages.Departaments' }, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
