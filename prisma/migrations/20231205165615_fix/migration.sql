/*
  Warnings:

  - Added the required column `img` to the `Laptop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historyoder` MODIFY `orderId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `laptop` ADD COLUMN `img` VARCHAR(191) NOT NULL;
