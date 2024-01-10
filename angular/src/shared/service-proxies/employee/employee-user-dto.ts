import { UserDto } from '../service-proxies';
import { EmployeeDto } from './Employee-dto';

export interface IEmployeeUserDto {
    employeeId: string;
    employee: EmployeeDto;
    userId: number;
    user: UserDto;
}

export class EmployeeUserDto implements IEmployeeUserDto {

    static fromJS(data: any): EmployeeUserDto {
        data = typeof data === 'object' ? data : {};
        const result = new EmployeeUserDto();
        result.init(data);
        return result;
    }

    employeeId: string;
    employee: EmployeeDto;
    userId: number;
    user: UserDto;

    constructor(data?: IEmployeeUserDto) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.employeeId = data.employeeId;
            this.employee = data.employee;
            this.userId = data.userId;
            this.user = data.user;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.employeeId = this.employeeId;
        data.employee = this.employee;
        data.userId = this.userId;
        data.user = this.user;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new EmployeeUserDto();
        result.init(json);
        return result;
    }
}
