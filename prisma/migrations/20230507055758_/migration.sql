-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('Phim_2D', 'Phim_3D');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nameUser" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "password" TEXT NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "nameMovie" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "timeMovie" INTEGER NOT NULL,
    "thumbnail" TEXT[],
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "ShowtimesMovie" (
    "id" SERIAL NOT NULL,
    "idRoom" INTEGER NOT NULL,
    "idMovie" INTEGER NOT NULL,
    "timeStart" TIMESTAMP(3) NOT NULL,
    "timeEnd" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShowtimesMovie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "numberChair" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
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

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timeStart" TIMESTAMP(3) NOT NULL,
    "timeEnd" TIMESTAMP(3) NOT NULL,
    "code" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slide" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "deleteFlg" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowtimesMovie" ADD CONSTRAINT "ShowtimesMovie_idMovie_fkey" FOREIGN KEY ("idMovie") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
