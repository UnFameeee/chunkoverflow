/*
  Warnings:

  - You are about to drop the `blocks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "blocks";

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summaryDescription" TEXT NOT NULL,
    "fullDescription" TEXT,
    "iconPath" TEXT,
    "url" TEXT,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");
