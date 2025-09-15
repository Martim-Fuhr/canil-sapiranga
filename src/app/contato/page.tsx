"use client";
import Header from "@/fragments/Header";
import { Container, Title, Content, ContactInfo, FormSection, ContactCard } from "./styles";

export default function Contato() {
  return (
    <>
      <Header />
      <Container>
        <Title>Entre em Contato</Title>
        
        <Content>
          <ContactInfo>
            <ContactCard>
              <h3>📍 Localização</h3>
              <p>Sapiranga, RS - Brasil</p>
              <p>Venha nos visitar e conhecer nossos pets!</p>
            </ContactCard>

            <ContactCard>
              <h3>📞 Telefone</h3>
              <p>(51) 99999-9999</p>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </ContactCard>

            <ContactCard>
              <h3>✉️ Email</h3>
              <p>contato@canilsapiranga.com.br</p>
              <p>Responderemos em até 24 horas</p>
            </ContactCard>

            <ContactCard>
              <h3>🕒 Horário de Funcionamento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </ContactCard>
          </ContactInfo>

          <FormSection>
            <div style={{ 
              background: "white", 
              padding: "40px", 
              borderRadius: "16px", 
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
              textAlign: "center"
            }}>
              <h2 style={{ color: "#2c3e50", marginBottom: "20px" }}>
                Formulário de Contato
              </h2>
              <p style={{ color: "#7f8c8d", marginBottom: "30px" }}>
                Em breve implementaremos um formulário de contato completo. 
                Por enquanto, utilize os dados acima para entrar em contato conosco.
              </p>
              <div style={{
                background: "#f8f9fa",
                padding: "20px",
                borderRadius: "8px",
                border: "2px dashed #dee2e6"
              }}>
                <p style={{ color: "#6c757d", fontStyle: "italic" }}>
                  🚧 Em desenvolvimento 🚧
                </p>
              </div>
            </div>
          </FormSection>
        </Content>
      </Container>
    </>
  );
}
