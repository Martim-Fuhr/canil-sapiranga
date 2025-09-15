import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 60px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
`;

export const PetTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 20px;
  }
`;

export const PetTypeCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }
`;

export const PetInfo = styled.div`
  padding: 25px;

  h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .size {
    color: #7f8c8d;
    margin-bottom: 15px;
    font-size: 1rem;
  }

  .description {
    color: #34495e;
    line-height: 1.6;
    margin-bottom: 20px;
    font-style: italic;
  }

  .temperament, .care {
    margin-bottom: 20px;

    h4 {
      color: #2c3e50;
      font-size: 1.1rem;
      margin-bottom: 10px;
      font-weight: 600;
    }

    ul {
      list-style: none;
      padding: 0;
      
      li {
        background: #f8f9fa;
        padding: 8px 12px;
        margin-bottom: 5px;
        border-radius: 6px;
        color: #495057;
        border-left: 3px solid #667eea;
      }
    }
  }
`;

export const CareList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    background: #e8f5e8;
    padding: 8px 12px;
    margin-bottom: 5px;
    border-radius: 6px;
    color: #2d5a2d;
    border-left: 3px solid #27ae60;
    position: relative;
    padding-left: 30px;

    &::before {
      content: "✓";
      position: absolute;
      left: 10px;
      color: #27ae60;
      font-weight: bold;
    }
  }
`;
