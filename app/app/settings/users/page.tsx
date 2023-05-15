import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Page() {
  
  setTimeout(() => {
    console.log("Ainda Estou no server.")
    
  }, 2000);
  const users = await prisma.user.findMany();
  

  return (
    <>
      <div>
        <ul>
          {users.map((user, index) => {
            return(
              <li key={index}> { user.name }</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}