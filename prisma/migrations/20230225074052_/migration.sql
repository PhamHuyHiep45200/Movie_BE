/*
  Warnings:

  - You are about to drop the `ImageMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageMovie" DROP CONSTRAINT "ImageMovie_idMovie_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "thumbnail" TEXT[];

-- DropTable
DROP TABLE "ImageMovie";
