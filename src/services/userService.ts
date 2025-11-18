import { PrismaClient } from '../generated/prisma/client';
import { z } from "zod";

const prisma = new PrismaClient();

export const CreateUserSchema = z.object({
    email: z.email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    phone: z.string().min(10, 'Telefone inválido'),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export async function createUser(data:CreateUserInput) {

    const validated = CreateUserSchema.safeParse(data);

    if(!validated.success) {
        throw new Error('Dados inválidos: ' + JSON.stringify(validated.error.issues));
    }

    return prisma.user.create({
        data: validated.data
    });
}


export async function findUserByEmail(email:string) {
    return prisma.user.findUnique({where: {email}});
}