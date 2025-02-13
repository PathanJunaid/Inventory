/*
  Warnings:

  - You are about to drop the column `stock` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Inventory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "stock",
DROP COLUMN "total";
