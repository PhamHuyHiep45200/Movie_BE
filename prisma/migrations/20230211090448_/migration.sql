/*
  Warnings:

  - You are about to drop the `Food` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('Phim_2D', 'Phim_3D');

-- DropTable
DROP TABLE "Food";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nameUser" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "nameMovie" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "thumbnail" TEXT[],
    "timeMovie" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "movieTypeId" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "movieCategoryId" INTEGER NOT NULL,

    CONSTRAINT "MovieCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieType" (
    "id" SERIAL NOT NULL,
    "category" "CategoryType" NOT NULL,
    "price" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "showtimesTypeId" INTEGER NOT NULL,

    CONSTRAINT "MovieType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Showtimes" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "scheduledFare" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "showtimesOderId" INTEGER NOT NULL,

    CONSTRAINT "Showtimes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Oder" (
    "id" SERIAL NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Oder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numberChair" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "showtimesRoomId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "couponOderId" INTEGER NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slide" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,

    CONSTRAINT "Slide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_movieTypeId_fkey" FOREIGN KEY ("movieTypeId") REFERENCES "MovieType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCategory" ADD CONSTRAINT "MovieCategory_movieCategoryId_fkey" FOREIGN KEY ("movieCategoryId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieType" ADD CONSTRAINT "MovieType_showtimesTypeId_fkey" FOREIGN KEY ("showtimesTypeId") REFERENCES "Showtimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Showtimes" ADD CONSTRAINT "Showtimes_showtimesOderId_fkey" FOREIGN KEY ("showtimesOderId") REFERENCES "Oder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Oder" ADD CONSTRAINT "Oder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_showtimesRoomId_fkey" FOREIGN KEY ("showtimesRoomId") REFERENCES "Showtimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_couponOderId_fkey" FOREIGN KEY ("couponOderId") REFERENCES "Oder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
