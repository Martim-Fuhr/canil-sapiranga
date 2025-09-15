"use client";
import Image from "next/image";
import Header from "@/fragments/Header";
import { Container, Content, TextSection, ImageSection } from "./styles";

export default function Sobre() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <TextSection>
            <h1>Sobre o Canil de Sapiranga</h1>
            <p>
              Bem-vindos ao Canil de Sapiranga, um lugar onde amor e cuidado se encontram 
              para transformar vidas. Nosso projeto nasceu da paixão por animais e do 
              desejo de proporcionar um lar seguro e cheio de amor para cada pet que 
              passa por nossas mãos.
            </p>
            <p>
              Acreditamos que cada animal merece uma segunda chance e uma família que 
              os ame incondicionalmente. Nosso objetivo é facilitar o encontro entre 
              pets adoráveis e famílias amorosas, criando laços que durarão para sempre.
            </p>
            <p>
              Aqui você encontrará não apenas um pet para adotar, mas um novo membro 
              da família que trará alegria, companheirismo e muito amor para sua casa.
            </p>
          </TextSection>
          <ImageSection>
            <Image
              src="/images/logo-header.png"
              alt="Canil de Sapiranga"
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            />
          </ImageSection>
        </Content>
      </Container>
    </>
  );
}
