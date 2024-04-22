/*
  Warnings:

  - Added the required column `deliveryFee` to the `HistoryOder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historyoder` ADD COLUMN `deliveryFee` INTEGER NOT NULL;
