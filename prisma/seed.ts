import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('senhaDev', 12)
  const user = await prisma.user.upsert({
    where: { email: 'dev@ibase.com' },
    update: {},
    create: {
      email: 'dev@ibase.com',
      name: 'Usuario Desenvolvedor',
      password
    }
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })