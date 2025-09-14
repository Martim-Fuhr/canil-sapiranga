import styled from "styled-components";
import theme from "@/styles/theme";

export const HeaderSection = styled.header`
  align-items: center;
  background-color: ${theme.colors.backgroundSecondary};
  color: ${theme.colors.textPrimary};
  box-shadow: 0 0 20px 3px ${theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 88px;
  max-width: 1920px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
`;

export const HamburgerIcon = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  left: 20px;
  height: 42px;
  justify-content: center;
  position: absolute;
  width: 42px;
  z-index: 2;

  &.icon.iconActive .hamburger {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
    transition: 0.5s;

    &:after {
      top: 0;
      background: ${theme.colors.whiteAccordion};
      transform: rotate(225deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    &:before {
      top: 0;
      background: ${theme.colors.whiteAccordion};
      transform: rotate(135deg);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
  }

  .hamburger {
    background-color: ${theme.colors.whiteAccordion};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    height: 3px;
    top: 50%;
    position: absolute;
    transition: 0.5s;
    width: 24px;

    @media screen and (max-width: 340px) {
      width: 1vw;
      position: absolute;
      left: 1px;
    }

    &:before {
      background: ${theme.colors.whiteAccordion};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      content: "";
      height: 3px;
      position: absolute;
      transition: 0.5s;
      top: -10px;
      width: 28px;

      @media screen and (max-width: 340px) {
        width: 2vw;
      }
    }

    &:after {
      background: ${theme.colors.whiteAccordion};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      content: "";
      height: 3px;
      position: absolute;
      top: 10px;
      transition: 0.5s;
      width: 28px;

      @media screen and (max-width: 340px) {
        width: 2vw;
      }
    }
  }
`;

export const UlList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;

  li {
    padding: 30px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 1024px) {
      padding: 15px;
    }
  }
`;

export const InfoList = styled.li`
  display: flex;
  cursor: pointer;
  list-style-type: none;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  max-width: 18%;
  min-width: 140px;
  margin: 5px;

  &:hover {
    text-decoration: underline;
  }

  a {
    color: ${theme.colors.whiteAccordion};
    padding: 25px 45px;

    &:hover {
      box-shadow: 0px;
    }
  }
`;

// export const Contact = styled.span`
//   align-items: center;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   padding: 30px;
//   position: absolute;
//   right: 20px;

//   &:hover {
//     text-decoration: underline;
//   }

//   @media screen and (max-width: 1024px) {
//     padding: 15px 10px;
//   }
// `;
