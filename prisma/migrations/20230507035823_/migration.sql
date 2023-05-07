/*
  Warnings:

  - You are about to drop the column `couponOderId` on the `Coupon` table. All the data in the column will be lost.
  - You are about to drop the column `movieCategoryId` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `showtimesId` on the `Oder` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Oder` table. All the data in the column will be lost.
  - You are about to drop the column `showtimesRoomId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `idShowTime` on the `ShowtimesMovie` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `MovieCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Showtimes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleteFlg` to the `ShowtimesMovie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idRoom` to the `ShowtimesMovie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ShowtimesMovie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `ShowtimesMovie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeEnd` to the `ShowtimesMovie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeStart` to the `ShowtimesMovie` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_couponOderId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_movieCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Oder" DROP CONSTRAINT "Oder_showtimesId_fkey";

-- DropForeignKey
ALTER TABLE "Oder" DROP CONSTRAINT "Oder_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_showtimesRoomId_fkey";

-- DropForeignKey
ALTER TABLE "ShowtimesMovie" DROP CONSTRAINT "ShowtimesMovie_idShowTime_fkey";

-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "couponOderId";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "movieCategoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Oder" DROP COLUMN "showtimesId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "showtimesRoomId";

-- AlterTable
ALTER TABLE "ShowtimesMovie" DROP COLUMN "idShowTime",
ADD COLUMN     "deleteFlg" BOOLEAN NOT NULL,
ADD COLUMN     "idRoom" INTEGER NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL,
ADD COLUMN     "timeEnd" TEXT NOT NULL,
ADD COLUMN     "timeStart" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropTable
DROP TABLE "MovieCategory";

-- DropTable
DROP TABLE "Showtimes";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookMovie" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "couponId" INTEGER NOT NULL,
    "showtimesMovieId" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookMovie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookMovieDetail" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "chairs" INTEGER[],
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookMovieDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowtimesMovie" ADD CONSTRAINT "ShowtimesMovie_idRoom_fkey" FOREIGN KEY ("idRoom") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMovie" ADD CONSTRAINT "BookMovie_showtimesMovieId_fkey" FOREIGN KEY ("showtimesMovieId") REFERENCES "ShowtimesMovie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMovie" ADD CONSTRAINT "BookMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMovie" ADD CONSTRAINT "BookMovie_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookMovieDetail" ADD CONSTRAINT "BookMovieDetail_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "BookMovie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
