-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'IN_DEVELOPMENT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "blocks" (
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

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blocks_slug_key" ON "blocks"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
