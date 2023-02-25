/*
  Warnings:

  - You are about to drop the column `showtimesOderId` on the `Showtimes` table. All the data in the column will be lost.
  - Added the required column `showtimesId` to the `Oder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Showtimes" DROP CONSTRAINT "Showtimes_showtimesOderId_fkey";

-- AlterTable
ALTER TABLE "Oder" ADD COLUMN     "showtimesId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Showtimes" DROP COLUMN "showtimesOderId";

-- AddForeignKey
ALTER TABLE "Oder" ADD CONSTRAINT "Oder_showtimesId_fkey" FOREIGN KEY ("showtimesId") REFERENCES "Showtimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
