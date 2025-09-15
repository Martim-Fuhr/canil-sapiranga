import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }
`;

export const TextSection = styled.div`
  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 30px;
    font-weight: 700;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #34495e;
    margin-bottom: 20px;
    text-align: justify;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
