import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 60px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #2c3e50;
    font-size: 1.3rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    color: #34495e;
    line-height: 1.6;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
