/*
  Warnings:

  - Added the required column `amount` to the `HistoryOder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historyoder` ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
