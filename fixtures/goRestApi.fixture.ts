import { test as base, APIRequestContext } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

type ApiFixtures = {
    api: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
    api: async ({ playwright }, use) => {
        const requestContext = await playwright.request.newContext({
            baseURL: process.env.BASE_URL,
            extraHTTPHeaders: {
                Authorization: `Bearer ${process.env.API_TOKEN}`,
            },
        });

        await use(requestContext);
        await requestContext.dispose();
    },
});