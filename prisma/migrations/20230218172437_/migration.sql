/*
  Warnings:

  - You are about to drop the column `movieCategoryId` on the `MovieCategory` table. All the data in the column will be lost.
  - Added the required column `movieCategoryId` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovieCategory" DROP CONSTRAINT "MovieCategory_movieCategoryId_fkey";

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "movieCategoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MovieCategory" DROP COLUMN "movieCategoryId";

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_movieCategoryId_fkey" FOREIGN KEY ("movieCategoryId") REFERENCES "MovieCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
