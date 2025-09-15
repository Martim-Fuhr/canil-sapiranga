"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/fragments/Header";
import { Container, HeroSection, Title, Subtitle, CarouselContainer, DogCard, NavigationButtons, DotIndicator } from "./styles";

interface Dog {
  id: number;
  name: string;
  breed: string;
  age: number;
  temperament: string;
  image: string;
  description: string;
}

// Dados mockados - depois vou conectar com o Prisma
const dogsData: Dog[] = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    age: 2,
    temperament: "Carinhoso e Brincalhão",
    image: "/images/logo-header.png",
    description: "Max é um cão muito dócil e adora brincar com crianças. Ele está esperando por uma família amorosa."
  },
  {
    id: 2,
    name: "Luna",
    breed: "Labrador",
    age: 3,
    temperament: "Inteligente e Leal",
    image: "/images/logo-header-2.png",
    description: "Luna é perfeita para famílias ativas e adora atividades ao ar livre. Muito obediente e carinhosa."
  },
  {
    id: 3,
    name: "Thor",
    breed: "Pastor Alemão",
    age: 1,
    temperament: "Protetor e Corajoso",
    image: "/images/logo-header.png",
    description: "Thor é um cão leal e protetor, ideal para famílias que buscam segurança e companheirismo."
  },
  {
    id: 4,
    name: "Bella",
    breed: "Beagle",
    age: 4,
    temperament: "Curiosa e Amigável",
    image: "/images/logo-header-2.png",
    description: "Bella é muito amigável e se dá bem com outros animais. Perfeita para famílias com crianças."
  },
  {
    id: 5,
    name: "Rex",
    breed: "Rottweiler",
    age: 2,
    temperament: "Leal e Protetor",
    image: "/images/logo-header.png",
    description: "Rex é um cão muito leal e protetor. Precisa de um dono experiente e ativo."
  },
  {
    id: 6,
    name: "Mel",
    breed: "Vira-lata",
    age: 3,
    temperament: "Carinhosa e Adaptável",
    image: "/images/logo-header-2.png",
    description: "Mel é uma vira-lata muito especial, carinhosa e se adapta facilmente a qualquer ambiente."
  }
];

export default function Adote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === dogsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? dogsData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleAdoptClick = (dogName: string) => {
    alert(`Obrigado pelo interesse em adotar ${dogName}! Entre em contato conosco através da página de contato para mais informações.`);
  };

  return (
    <>
      <Header />
      <Container>
        <HeroSection>
          <Title>Adote um Pet</Title>
          <Subtitle>
            Conheça nossos pets disponíveis para adoção. Cada um deles tem uma história única 
            e está esperando por uma família que os ame e cuide com carinho.
          </Subtitle>
        </HeroSection>

        <CarouselContainer>
          <div className="carousel-wrapper">
            <div 
              className="carousel-content"
              style={{
                transform: `translateX(-${currentIndex * 16.666}%)`,
                transition: "transform 0.5s ease-in-out"
              }}
            >
              {dogsData.map((dog) => (
                <DogCard key={dog.id}>
                  <div className="dog-image">
                    <Image
                      src={dog.image}
                      alt={dog.name}
                      width={300}
                      height={300}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "12px"
                      }}
                    />
                  </div>
                  <div className="dog-info">
                    <h3>{dog.name}</h3>
                    <p className="breed">{dog.breed}</p>
                    <p className="age">{dog.age} anos</p>
                    <p className="temperament">{dog.temperament}</p>
                    <p className="description">{dog.description}</p>
                    <button 
                      className="adopt-button"
                      onClick={() => handleAdoptClick(dog.name)}
                    >
                      Quero Adotar {dog.name}
                    </button>
                  </div>
                </DogCard>
              ))}
            </div>
          </div>

          <NavigationButtons>
            <button className="nav-button prev" onClick={prevSlide}>
              ❮
            </button>
            <button className="nav-button next" onClick={nextSlide}>
              ❯
            </button>
          </NavigationButtons>

          <DotIndicator>
            {dogsData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </DotIndicator>
        </CarouselContainer>

        <div style={{ 
          marginTop: "60px", 
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)"
        }}>
          <h2 style={{ color: "white", marginBottom: "20px", fontSize: "2rem" }}>
            Processo de Adoção
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "30px",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            <div style={{ color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>1️⃣</div>
              <h3>Escolha seu Pet</h3>
              <p>Conheça nossos pets e escolha aquele que mais combina com sua família.</p>
            </div>
            <div style={{ color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>2️⃣</div>
              <h3>Entre em Contato</h3>
              <p>Fale conosco para agendar uma visita e conhecer pessoalmente o pet.</p>
            </div>
            <div style={{ color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "10px" }}>3️⃣</div>
              <h3>Leve para Casa</h3>
              <p>Após a aprovação, leve seu novo amigo para casa e seja muito feliz!</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
