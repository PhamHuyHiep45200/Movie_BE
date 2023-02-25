/*
  Warnings:

  - You are about to drop the column `movieTypeId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "movieTypeId",
DROP COLUMN "thumbnail";
