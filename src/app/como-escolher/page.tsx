"use client";
import Image from "next/image";
import Header from "@/fragments/Header";
import { Container, Title, PetTypesGrid, PetTypeCard, PetInfo, CareList } from "./styles";

interface PetType {
  id: number;
  name: string;
  image: string;
  size: string;
  temperament: string[];
  care: string[];
  description: string;
}

const petTypes: PetType[] = [
  {
    id: 1,
    name: "Cachorros Pequenos",
    image: "/images/logo-header.png",
    size: "Pequeno (até 10kg)",
    temperament: ["Carinhosos", "Ativos", "Ideais para apartamentos"],
    care: [
      "Exercícios diários de 30-60 minutos",
      "Alimentação 2-3 vezes ao dia",
      "Escovação semanal",
      "Visitas regulares ao veterinário"
    ],
    description: "Perfeitos para famílias que vivem em apartamentos ou têm pouco espaço."
  },
  {
    id: 2,
    name: "Cachorros Médios",
    image: "/images/logo-header-2.png",
    size: "Médio (10-25kg)",
    temperament: ["Equilibrados", "Protetores", "Ótimos companheiros"],
    care: [
      "Exercícios diários de 1-2 horas",
      "Alimentação 2 vezes ao dia",
      "Escovação 2-3 vezes por semana",
      "Treinamento básico de obediência"
    ],
    description: "Excelente opção para famílias com crianças e casas com quintal."
  },
  {
    id: 3,
    name: "Cachorros Grandes",
    image: "/images/logo-header.png",
    size: "Grande (acima de 25kg)",
    temperament: ["Calmos", "Protetores", "Muito leais"],
    care: [
      "Exercícios diários de 2+ horas",
      "Alimentação 1-2 vezes ao dia",
      "Escovação diária",
      "Espaço adequado para se movimentar",
      "Treinamento consistente"
    ],
    description: "Ideais para famílias ativas com espaço adequado e experiência com cães."
  }
];

export default function ComoEscolher() {
  return (
    <>
      <Header />
      <Container>
        <Title>Como Escolher o Pet Ideal</Title>
        
        <PetTypesGrid>
          {petTypes.map((pet) => (
            <PetTypeCard key={pet.id}>
              <div className="image-container">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  width={300}
                  height={200}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              </div>
              
              <PetInfo>
                <h3>{pet.name}</h3>
                <p className="size"><strong>Tamanho:</strong> {pet.size}</p>
                <p className="description">{pet.description}</p>
                
                <div className="temperament">
                  <h4>Temperamento:</h4>
                  <ul>
                    {pet.temperament.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>

                <div className="care">
                  <h4>Cuidados Necessários:</h4>
                  <CareList>
                    {pet.care.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </CareList>
                </div>
              </PetInfo>
            </PetTypeCard>
          ))}
        </PetTypesGrid>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
            Dicas Importantes
          </h2>
          <div style={{ 
            background: "white", 
            padding: "30px", 
            borderRadius: "12px", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
              <li>Considere seu estilo de vida e disponibilidade de tempo</li>
              <li>Verifique se você tem espaço adequado para o tamanho do pet</li>
              <li>Pense no custo de manutenção (alimentação, veterinário, etc.)</li>
              <li>Considere a idade do pet (filhotes precisam de mais atenção)</li>
              <li>Visite o pet antes de adotar para conhecer seu temperamento</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
