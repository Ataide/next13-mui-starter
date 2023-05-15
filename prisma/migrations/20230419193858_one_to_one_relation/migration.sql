/*
  Warnings:

  - You are about to drop the `_PeopleToPosition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `peoples` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[personId]` on the table `contracts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `personId` to the `contracts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_PeopleToPosition" DROP CONSTRAINT "_PeopleToPosition_A_fkey";

-- DropForeignKey
ALTER TABLE "_PeopleToPosition" DROP CONSTRAINT "_PeopleToPosition_B_fkey";

-- AlterTable
ALTER TABLE "contracts" ADD COLUMN     "personId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_PeopleToPosition";

-- DropTable
DROP TABLE "peoples";

-- CreateTable
CREATE TABLE "Persons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PersonToPosition" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Persons_cpf_key" ON "Persons"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToPosition_AB_unique" ON "_PersonToPosition"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToPosition_B_index" ON "_PersonToPosition"("B");

-- CreateIndex
CREATE UNIQUE INDEX "contracts_personId_key" ON "contracts"("personId");

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Persons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToPosition" ADD CONSTRAINT "_PersonToPosition_A_fkey" FOREIGN KEY ("A") REFERENCES "Persons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToPosition" ADD CONSTRAINT "_PersonToPosition_B_fkey" FOREIGN KEY ("B") REFERENCES "positions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
