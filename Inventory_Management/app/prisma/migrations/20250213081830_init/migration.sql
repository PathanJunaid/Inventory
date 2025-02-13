/*
  Warnings:

  - Added the required column `location` to the `Warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Warehouse" DROP COLUMN "location",
ADD COLUMN     "location" INTEGER NOT NULL;
