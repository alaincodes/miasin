/*
  Warnings:

  - You are about to drop the column `title` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "title",
ADD COLUMN     "guiltyCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "innocentCount" INTEGER NOT NULL DEFAULT 0;
