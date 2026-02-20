import { expect } from '@playwright/test';
import { test } from '../../fixtures/goRestApi.fixture';
import { UserFactory } from '../../factories/user.factory';
import { Gender, Status } from '../../dto/create-user.dto';
import { UserResponseValidator } from '../../validators/user-response.validator';

test.describe('Users API - POST /users', () => {

    test.describe('Happy Path', () => {

        test('should create an active male user successfully', async ({ api }) => {

            const payload = UserFactory.create(
                Gender.MALE,
                Status.ACTIVE
            );

            const response = await api.post('users', { data: payload });

            expect(response.status()).toBe(201);

            const body = await response.json();

            UserResponseValidator.validateCreatedUser(body, payload);
        });

    });

});