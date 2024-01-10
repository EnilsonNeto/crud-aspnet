import { EmployeeDto } from "../employee/Employee-dto";

export interface ITruckDto {
    id: string;
    vehicleLicensePlate: string;
    inTransit: boolean;
    employeeId: string;
    employee: EmployeeDto;
    imagesUrl: string;
}

export class TruckDto implements ITruckDto {

    static fromJS(data: any): TruckDto {
        data = typeof data === 'object' ? data : {};
        const result = new TruckDto();
        result.init(data);
        return result;
    }

    id: string;
    vehicleLicensePlate: string;
    inTransit: boolean;
    employeeId: string;
    employee: EmployeeDto;
    imagesUrl: string;

    constructor(data?: ITruckDto) {
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
            this.id = data.id;
            this.vehicleLicensePlate = data.vehicleLicensePlate;
            this.inTransit = data.inTransit;
            this.employeeId = data.employeeId;
            this.employee = data.employee;
            this.imagesUrl = data.imagesUrl;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.vehicleLicensePlate = this.vehicleLicensePlate;
        data.inTransit = this.inTransit;
        data.employeeId = this.employeeId;
        data.employee = this.employee;
        data.imagesUrl = this.imagesUrl;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new TruckDto();
        result.init(json);
        return result;
    }
}
