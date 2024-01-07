export interface ICreateEmployeeDto {
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
    imageUrl: string;
    image: File;
    truckId?: string;
    departamentId: string;
}

export class CreateEmployeeDto implements ICreateEmployeeDto {

    static fromJS(data: any): CreateEmployeeDto {
        data = typeof data === 'object' ? data : {};
        const result = new CreateEmployeeDto();
        result.init(data);
        return result;
    }

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
    imageUrl: string;
    image: File;
    truckId?: string;
    departamentId: string;

    constructor(data?: ICreateEmployeeDto) {
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
            this.imageUrl = data.imageUrl;
            this.image = data.image;
            this.truckId = data.truckId;
            this.departamentId = data.departamentId;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
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
        data.imageUrl = this.imageUrl;
        data.image = this.image;
        data.truckId = this.truckId;
        data.departamentId = this.departamentId;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new CreateEmployeeDto();
        result.init(json);
        return result;
    }
}
