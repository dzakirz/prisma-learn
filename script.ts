import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main () {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Nigel",
    //         age: 22,
    //         email: "nigel@gmail.com",
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     }
    // })
    // const user = await prisma.user.findUnique({
    //     where: {
    //         age_name: {
    //             name: "Nathan",
    //             age: 22
    //         }
    //     }
    // })
    // const userPreference = await prisma.userPreference.deleteMany()
    // console.log(userPreference)
    // await prisma.user.deleteMany()
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async() => {
        await prisma.$disconnect()
    })