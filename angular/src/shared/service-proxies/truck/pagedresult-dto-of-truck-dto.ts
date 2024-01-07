import { TruckDto } from "./truck-dto";

export interface IPagedResultDtoOfTruckDto {
    totalCount: number | undefined;
    items: TruckDto[] | undefined;
}

export class PagedResultDtoOfTruckDto implements IPagedResultDtoOfTruckDto {

    static fromJS(data: any): PagedResultDtoOfTruckDto {
        data = typeof data === 'object' ? data : {};
        const result = new PagedResultDtoOfTruckDto();
        result.init(data);
        return result;
    }
    totalCount: number | undefined;
    items: TruckDto[] | undefined;

    constructor(data?: IPagedResultDtoOfTruckDto) {
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
                    this.items.push(TruckDto.fromJS(item));
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

    clone(): PagedResultDtoOfTruckDto {
        const json = this.toJSON();
        const result = new PagedResultDtoOfTruckDto();
        result.init(json);
        return result;
    }
}
