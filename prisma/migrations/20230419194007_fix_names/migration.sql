/*
  Warnings:

  - You are about to drop the `Persons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PersonToPosition" DROP CONSTRAINT "_PersonToPosition_A_fkey";

-- DropForeignKey
ALTER TABLE "contracts" DROP CONSTRAINT "contracts_personId_fkey";

-- DropTable
DROP TABLE "Persons";

-- CreateTable
CREATE TABLE "persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "persons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "persons_cpf_key" ON "persons"("cpf");

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_personId_fkey" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToPosition" ADD CONSTRAINT "_PersonToPosition_A_fkey" FOREIGN KEY ("A") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
