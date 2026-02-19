export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

export class CreateUserDto {
    constructor(
        public name: string,
        public email: string,
        public gender: Gender,
        public status: Status
    ) {}
}