import { TruckDto } from "../truck/truck-dto";
import { DepartamentDto } from "../departament/departament-dto";

export interface IEmployeeDto {
    id: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    age: string;
    dateOfBirth: Date;
    ssn: string;
    rg: string;
    cep: string;
    street: string;
    neighborhood: string;
    numberOfHouse: string;
    complement: string;
    isActive: boolean;
    imagesUrl: string;
    image: File;
    truckId?: string;
    truck: TruckDto;
    departamentId: string;
    departament: DepartamentDto;
}

export class EmployeeDto implements IEmployeeDto {

    static fromJS(data: any): EmployeeDto {
        data = typeof data === 'object' ? data : {};
        const result = new EmployeeDto();
        result.init(data);
        return result;
    }

    id: string;
    name: string;
    email: string;
    surname: string;
    phoneNumber: string;
    age: string;
    dateOfBirth: Date;
    ssn: string;
    rg: string;
    cep: string;
    street: string;
    neighborhood: string;
    numberOfHouse: string;
    complement: string;
    isActive: boolean;
    imagesUrl: string;
    image: File;
    truckId: string;
    truck: TruckDto;
    departamentId: string;
    departament: DepartamentDto;

    constructor(data?: IEmployeeDto) {
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
            this.email = data.email;
            this.name = data.name;
            this.age = data.age;
            this.ssn = data.ssn;
            this.rg = data.rg;
            this.cep = data.cep;
            this.phoneNumber = data.phoneNumber;
            this.surname = data.surname;
            this.dateOfBirth = data.dateOfBirth;
            this.neighborhood = data.neighborhood;
            this.complement = data.complement;
            this.street = data.street;
            this.isActive = data.isActive;
            this.imagesUrl = data.imagesUrl;
            this.image = data.image;
            this.truckId = data.truckId;
            this.truck = data.truck;
            this.departamentId = data.departamentId;
            this.departament = data.departament;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.email = this.email;
        data.name = this.name;
        data.age = this.age;
        data.ssn = this.ssn;
        data.rg = this.rg;
        data.cep = this.cep;
        data.surname = this.surname;
        data.phoneNumber = this.phoneNumber;
        data.dateOfBirth = this.dateOfBirth;
        data.neighborhood = this.neighborhood;
        data.complement = this.complement;
        data.street = this.street;
        data.isActive = this.isActive;
        data.imagesUrl = this.imagesUrl;
        data.image = this.image;
        data.truckId = this.truckId;
        data.truck = this.truck;
        data.departamentId = this.departamentId;
        data.departament = this.departament;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new EmployeeDto();
        result.init(json);
        return result;
    }
}
