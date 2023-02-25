-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_movieCategoryId_fkey";

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "movieCategoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_movieCategoryId_fkey" FOREIGN KEY ("movieCategoryId") REFERENCES "MovieCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
