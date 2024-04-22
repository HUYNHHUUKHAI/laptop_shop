-- CreateTable
CREATE TABLE `HistoryOder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `laptopId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HistoryOder` ADD CONSTRAINT `HistoryOder_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoryOder` ADD CONSTRAINT `HistoryOder_laptopId_fkey` FOREIGN KEY (`laptopId`) REFERENCES `Laptop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
