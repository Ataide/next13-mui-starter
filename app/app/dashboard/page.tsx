import { Stats } from "../../../components/dashboard/stats";
import { prisma } from "../../../prisma/client"

export default async function Page() {
  const usersCount = await prisma.user.findMany();
  console.log(usersCount)
  return (
    <Stats size={3} title="Total de Usuarios" value={usersCount.length.toString()} showActions={true}/>
  )
}