export interface ICreateEmployeeUserDto {
    employeeId: string;
    userId: number;
}

export class CreateEmployeeUserDto implements ICreateEmployeeUserDto {

    static fromJS(data: any): CreateEmployeeUserDto {
        data = typeof data === 'object' ? data : {};
        const result = new CreateEmployeeUserDto();
        result.init(data);
        return result;
    }

    employeeId: string;
    userId: number;

    constructor(data?: ICreateEmployeeUserDto) {
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
            this.userId = data.userId;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.employeeId = this.employeeId;
        data.userId = this.userId;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new CreateEmployeeUserDto();
        result.init(json);
        return result;
    }
}
