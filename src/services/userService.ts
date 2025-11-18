import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type CreateuserInput ={
    email: string,
    password: string,
    phone: string
}

export async function createUser(data:CreateuserInput) {
    return prisma.user.create({
        data
    });
}


export async function findUserByEmail(email:string) {
    return prisma.user.findUnique({where: {email}});
}