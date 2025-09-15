"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/fragments/Header";
import { SectionItemSold } from "./styles";

export default function AddDog() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    stature: "",
    pelage: "",
    details: "",
    slug: "",
    imageUrl: "",
  });

  const [message, setMessage] = useState("");
  const router = useRouter();

  // Define o tipo para o evento de formulário (submissão)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/dogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Dog added successfully!");
        setFormData({
          name: "",
          age: "",
          stature: "",
          pelage: "",
          details: "",
          slug: "",
          imageUrl: "",
        });
        router.push("/");
      } else {
        setMessage("Failed to add dog.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred.");
    }
  };

  // Define o tipo para o evento de mudança de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header />
      <SectionItemSold>
        <h3>Add a New Dog</h3>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <input type="text" name="stature" placeholder="Stature" value={formData.stature} onChange={handleChange} required />
          <input type="text" name="pelage" placeholder="Pelage" value={formData.pelage} onChange={handleChange} required />
          <textarea name="details" placeholder="Details" value={formData.details} onChange={handleChange}></textarea>
          <input type="text" name="slug" placeholder="Slug" value={formData.slug} onChange={handleChange} required />
          <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
          <button type="submit">Add Dog</button>
        </form>
        {message && <p>{message}</p>}
      </SectionItemSold>
    </>
  );
}
