/*
  Warnings:

  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `People` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PeopleToPosition" DROP CONSTRAINT "_PeopleToPosition_A_fkey";

-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "offices" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "positions" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "People";

-- CreateTable
CREATE TABLE "peoples" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peoples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "peoples_cpf_key" ON "peoples"("cpf");

-- AddForeignKey
ALTER TABLE "_PeopleToPosition" ADD CONSTRAINT "_PeopleToPosition_A_fkey" FOREIGN KEY ("A") REFERENCES "peoples"("id") ON DELETE CASCADE ON UPDATE CASCADE;
