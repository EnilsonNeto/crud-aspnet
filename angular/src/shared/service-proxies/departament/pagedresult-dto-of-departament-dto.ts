import { DepartamentDto } from "./departament-dto";

export interface IPagedResultDtoOfDepartamentDto {
    totalCount: number | undefined;
    items: DepartamentDto[] | undefined;
}

export class PagedResultDtoOfDepartamentDto implements IPagedResultDtoOfDepartamentDto {

    static fromJS(data: any): PagedResultDtoOfDepartamentDto {
        data = typeof data === 'object' ? data : {};
        const result = new PagedResultDtoOfDepartamentDto();
        result.init(data);
        return result;
    }
    totalCount: number | undefined;
    items: DepartamentDto[] | undefined;

    constructor(data?: IPagedResultDtoOfDepartamentDto) {
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
                    this.items.push(DepartamentDto.fromJS(item));
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

    clone(): PagedResultDtoOfDepartamentDto {
        const json = this.toJSON();
        const result = new PagedResultDtoOfDepartamentDto();
        result.init(json);
        return result;
    }
}
