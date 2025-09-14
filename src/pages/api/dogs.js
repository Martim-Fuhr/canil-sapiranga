import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, age, stature, pelage, details, slug, imageUrl } = req.body;

    try {
      const newDog = await prisma.dogs.create({
        data: {
          name,
          age: parseInt(age, 10),
          stature,
          pelage,
          details,
          slug,
          imageUrl,
        },
      });

      res.status(200).json(newDog);
    } catch (error) {
      console.error("Error creating dog:", error);
      res.status(500).json({ error: "Failed to add dog." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
