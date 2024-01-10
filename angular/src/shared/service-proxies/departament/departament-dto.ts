import { EmployeeDto } from "../employee/Employee-dto";

export interface IDepartamentDto {
    id: string;
    type: string;
    description?: string;
}

export class DepartamentDto implements IDepartamentDto {

    static fromJS(data: any): DepartamentDto {
        data = typeof data === 'object' ? data : {};
        const result = new DepartamentDto();
        result.init(data);
        return result;
    }

    id: string;
    type: string;
    description?: string;
    constructor(data?: IDepartamentDto) {
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
            this.type = data.type;
            this.description = data.description;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.id = this.id;
        data.type = this.type;
        data.description = this.description;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new DepartamentDto();
        result.init(json);
        return result;
    }
}
