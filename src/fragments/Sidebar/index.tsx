import { Container, InfoList, SpanOverlay } from './styles'

import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

interface SidebarProps {
  active?: boolean | any
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export function Sidebar({ active, setActive }: SidebarProps) {
  const closeSidebar = () => {
    setActive(false)
  }

  return (
    <>
      <Container sidebar={active.toString()} onClick={closeSidebar}>
        <FaArrowLeft onClick={closeSidebar} />
        <InfoList>
          <Link href="#sobre" scroll={true}>
            Sobre
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#como-escolher" scroll={true}>
            Como escolher um pet?
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#adote-um-pet" scroll={true}>
          Adote um pet
          </Link>
        </InfoList>

        <InfoList>
          <Link href="#contato" scroll={true}>
            Contato
          </Link>
        </InfoList>
      </Container>
      <SpanOverlay sidebar={!active.toString()} onClick={closeSidebar} />
    </>
  )
}
export default Sidebar
