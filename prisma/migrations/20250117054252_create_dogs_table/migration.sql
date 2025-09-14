-- CreateTable
CREATE TABLE "Dogs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "stature" TEXT NOT NULL,
    "pelage" TEXT NOT NULL,
    "details" TEXT,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Dogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dogs_slug_key" ON "Dogs"("slug");
