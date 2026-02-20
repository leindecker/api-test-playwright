import { expect } from '@playwright/test';
import { test } from '../../fixtures/goRestApi.fixture';
import { UserResponseValidator } from '../../validators/user-response.validator';

test.describe('Users API - GET /users', () => {

    test.describe('Happy Path', () => {

        test('should return non-empty users list successfully', async ({ api }) => {

            const response = await api.get('users');

            expect(response.status()).toBe(200);

            const body = await response.json();

            UserResponseValidator.validateUsersList(body);
        });

    });

});