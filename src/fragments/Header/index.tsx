"use client";

import { useState, useEffect } from "react";
import { useBreakpoints } from "@/hooks/use-breakpoints";
import { HeaderSection, HamburgerIcon, UlList, InfoList } from "./styles";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "../../../public/images/logo-header-2.png";
import Sidebar from "../Sidebar";

export function Header() {
  const [sidebar, setSidebar] = useState(false);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { isMobile } = useBreakpoints();
  const showSideBar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setIsHeaderVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 200
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const [headerContent, setHeaderContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (isMobile) {
      setHeaderContent(mobileHeader());
    } else {
      setHeaderContent(desktopHeader());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, isHeaderVisible, sidebar]);

  const mobileHeader = () => (
    <HeaderSection
      style={{
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <HamburgerIcon
        className={sidebar ? "icon iconActive" : "icon"}
        onClick={showSideBar}
      >
        <div className="hamburger hamburgerIcon" />
      </HamburgerIcon>
      <Link href={"/"}>
        <Image
          alt="logo header cão feliz"
          src={HeaderLogo}
          width={130}
          height={114}
        />
      </Link>
      {sidebar && <Sidebar setActive={setSidebar} active={sidebar} />}
    </HeaderSection>
  );

  const desktopHeader = () => (
    <HeaderSection>
      <nav className="h-full w-full flex">
        <UlList>
          <InfoList>Sobre</InfoList>
          <InfoList>Como escolher um pet?</InfoList>
          <Link href={"/"}>
            <Image
              className="w-full"
              alt="logo header cão feliz"
              src={HeaderLogo}
              width={118}
              height={114}
            />
          </Link>
          <InfoList>Adote um pet</InfoList>
          <InfoList>Contato</InfoList>
        </UlList>
      </nav>
      {/* <Contact>Contato</Contact> */}
    </HeaderSection>
  );

  return <>{headerContent}</>;
}

export default Header;
