export interface ICreateDepartamentDto {
    type: string;
    description?: string;
}

export class CreateDepartamentDto implements ICreateDepartamentDto {

    static fromJS(data: any): CreateDepartamentDto {
        data = typeof data === 'object' ? data : {};
        const result = new CreateDepartamentDto();
        result.init(data);
        return result;
    }

    type: string;
    description?: string;

    constructor(data?: ICreateDepartamentDto) {
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
            this.type = data.type;
            this.description = data.description;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.type = this.type;
        data.description = this.description;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new CreateDepartamentDto();
        result.init(json);
        return result;
    }
}
