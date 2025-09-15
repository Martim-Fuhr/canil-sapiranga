import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
`;

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  .carousel-wrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
  }

  .carousel-content {
    display: flex;
    width: 400%; // 4 slides = 400%
  }
`;

export const DogCard = styled.div`
  width: 25%;
  flex-shrink: 0;
  background: white;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 500px;

  @media (max-width: 768px) {
    padding: 20px;
    min-height: 450px;
  }

  .dog-image {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .dog-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 10px;
      font-weight: 700;
    }

    .breed {
      font-size: 1.2rem;
      color: #7f8c8d;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .age {
      font-size: 1.1rem;
      color: #95a5a6;
      margin-bottom: 15px;
    }

    .temperament {
      font-size: 1rem;
      color: #27ae60;
      background: #d5f4e6;
      padding: 8px 16px;
      border-radius: 20px;
      margin-bottom: 15px;
      font-weight: 500;
    }

    .description {
      font-size: 1rem;
      color: #34495e;
      line-height: 1.6;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .adopt-button {
      background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 25px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(116, 185, 255, 0.3);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(116, 185, 255, 0.4);
        background: linear-gradient(135deg, #0984e3 0%, #74b9ff 100%);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }
`;

export const NavigationButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;

  .nav-button {
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    color: #2c3e50;
    cursor: pointer;
    transition: all 0.3s ease;
    pointer-events: all;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 0 20px;

    &:hover {
      background: white;
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    &.prev {
      margin-left: 20px;
    }

    &.next {
      margin-right: 20px;
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      margin: 0 10px;

      &.prev {
        margin-left: 10px;
      }

      &.next {
        margin-right: 10px;
      }
    }
  }
`;

export const DotIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
      transform: scale(1.2);
    }

    &.active {
      background: white;
      transform: scale(1.3);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }
`;
