import { CreateUserDto, Gender, Status } from '../dto/create-user.dto';

export class UserFactory {

    static create(
        gender: Gender,
        status: Status,
        overrides?: Partial<CreateUserDto>
    ): CreateUserDto {

        const timestamp = Date.now();

        const defaultUser = new CreateUserDto(
            `User ${timestamp}`,
            `user${timestamp}@maildrop.test`,
            gender,
            status
        );

        return Object.assign(defaultUser, overrides);
    }
}