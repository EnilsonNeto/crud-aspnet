export interface ICreateTruckDto {
    vehicleLicensePlate: string;
    inTransit: boolean;
    TruckId: string;
    imagesUrl: string;
}

export class CreateTruckDto implements ICreateTruckDto {

    static fromJS(data: any): CreateTruckDto {
        data = typeof data === 'object' ? data : {};
        const result = new CreateTruckDto();
        result.init(data);
        return result;
    }

    vehicleLicensePlate: string;
    inTransit: boolean;
    TruckId: string;
    imagesUrl: string;

    constructor(data?: ICreateTruckDto) {
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
            this.vehicleLicensePlate = data.vehicleLicensePlate;
            this.inTransit = data.inTransit;
            this.TruckId = data.TruckId;
            this.imagesUrl = data.imagesUrl;
        }
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data.vehicleLicensePlate = this.vehicleLicensePlate;
        data.inTransit = this.inTransit;
        data.TruckId = this.TruckId;
        data.imagesUrl = this.imagesUrl;

        return data;
    }

    clone() {
        const json = this.toJSON();
        const result = new CreateTruckDto();
        result.init(json);
        return result;
    }
}
