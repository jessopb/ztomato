-- CreateTable
CREATE TABLE `TomatoSessions` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `project` VARCHAR(191),
    `projectId` VARCHAR(191),
    `timestamp` DATETIME(3),
    `notes` VARCHAR(191),
    `grade` ENUM('GREAT', 'GOOD', 'POOR') NOT NULL DEFAULT 'GOOD',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TomatoSessions` ADD CONSTRAINT `TomatoSessions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
