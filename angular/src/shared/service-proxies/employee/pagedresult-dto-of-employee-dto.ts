import { EmployeeDto } from "./Employee-dto";

export interface IPagedResultDtoOfEmployeeDto {
    totalCount: number | undefined;
    items: EmployeeDto[] | undefined;
}

export class PagedResultDtoOfEmployeeDto implements IPagedResultDtoOfEmployeeDto {

    static fromJS(data: any): PagedResultDtoOfEmployeeDto {
        data = typeof data === 'object' ? data : {};
        const result = new PagedResultDtoOfEmployeeDto();
        result.init(data);
        return result;
    }
    totalCount: number | undefined;
    items: EmployeeDto[] | undefined;

    constructor(data?: IPagedResultDtoOfEmployeeDto) {
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
            this.totalCount = data['totalCount'];
            if (data['items'] && data['items'].constructor === Array) {
                this.items = [];
                for (const item of data['items']) {
                    this.items.push(EmployeeDto.fromJS(item));
                }
            }
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data['totalCount'] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data['items'] = [];
            for (const item of this.items) {
                data['items'].push(item.toJSON());
            }
        }
        return data;
    }

    clone(): PagedResultDtoOfEmployeeDto {
        const json = this.toJSON();
        const result = new PagedResultDtoOfEmployeeDto();
        result.init(json);
        return result;
    }
}
