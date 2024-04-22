/*
  Warnings:

  - A unique constraint covering the columns `[orderId]` on the table `HistoryOder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `HistoryOder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `HistoryOder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historyoder` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `orderId` INTEGER NOT NULL,
    ADD COLUMN `status` ENUM('PENDDING', 'COMPLETE', 'CANCEL') NOT NULL DEFAULT 'PENDDING';

-- AlterTable
ALTER TABLE `user` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `HistoryOder_orderId_key` ON `HistoryOder`(`orderId`);
