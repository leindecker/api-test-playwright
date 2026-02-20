import {userResponseSchema, usersListSchema} from "../schemas/user.schema";
import {CreateUserDto} from "../dto/create-user.dto";
import {expect} from "@playwright/test";

export class UserResponseValidator {
    static validateCreatedUser(
        responseBody: unknown,
        payload: CreateUserDto
    ) {
        const user = userResponseSchema.parse(responseBody);

        expect(user).toMatchObject({
            name: payload.name,
            email: payload.email,
            gender: payload.gender,
            status: payload.status
        });

        return user;
    }

    static validateUsersList(responseBody: unknown) {
        const users = usersListSchema.parse(responseBody);
        expect(users.length).toBeGreaterThan(0);

        return users;
    }
}