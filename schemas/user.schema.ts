import { z } from 'zod';

export const userResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    gender: z.enum(['male', 'female']),
    status: z.enum(['active', 'inactive'])
});

export const usersListSchema = z.array(userResponseSchema);
