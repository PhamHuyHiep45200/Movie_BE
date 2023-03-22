/*
  Warnings:

  - You are about to drop the column `showtimesRoomId` on the `Room` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_showtimesRoomId_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "showtimesRoomId";

-- CreateTable
CREATE TABLE "ShowTimeRoom" (
    "id" SERIAL NOT NULL,
    "idRoom" INTEGER NOT NULL,
    "idShowTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShowTimeRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShowTimeRoom" ADD CONSTRAINT "ShowTimeRoom_idRoom_fkey" FOREIGN KEY ("idRoom") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowTimeRoom" ADD CONSTRAINT "ShowTimeRoom_idShowTime_fkey" FOREIGN KEY ("idShowTime") REFERENCES "Showtimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
