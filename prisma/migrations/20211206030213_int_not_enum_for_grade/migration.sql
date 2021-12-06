/*
  Warnings:

  - You are about to alter the column `grade` on the `TomatoSessions` table. The data in that column could be lost. The data in that column will be cast from `Enum("TomatoSessions_grade")` to `Int`.

*/
-- AlterTable
ALTER TABLE `TomatoSessions` MODIFY `grade` INTEGER DEFAULT 2;
