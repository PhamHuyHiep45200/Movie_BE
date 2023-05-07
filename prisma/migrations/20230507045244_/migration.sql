/*
  Warnings:

  - You are about to drop the column `status` on the `ShowtimesMovie` table. All the data in the column will be lost.
  - Added the required column `code` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeEnd` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStart` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `timeEnd` on the `ShowtimesMovie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `timeStart` on the `ShowtimesMovie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "timeEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "timeStart" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ShowtimesMovie" DROP COLUMN "status",
DROP COLUMN "timeEnd",
ADD COLUMN     "timeEnd" TIMESTAMP(3) NOT NULL,
DROP COLUMN "timeStart",
ADD COLUMN     "timeStart" TIMESTAMP(3) NOT NULL;
