export interface IApiRequestUser {
    readonly name: string;
    readonly username: string;
    readonly email: string;
    readonly address: Address;
    readonly phone: string;
    readonly website: string;
    readonly company: Company;
}

export interface IApiResponseUser extends IApiRequestUser {
    readonly id: number;
}

export interface Address {
    readonly street: string;
    readonly suite: string;
    readonly city: string;
    readonly zipcode: string;
    readonly geo: Geo;
}

export interface Geo {
    readonly lat: string;
    readonly lng: string;
}

export interface Company {
    readonly name: string;
    readonly catchPhrase: string;
    readonly bs: string;
}
