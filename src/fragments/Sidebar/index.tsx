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
          <Link href="/sobre" onClick={closeSidebar}>
            Sobre
          </Link>
        </InfoList>

        <InfoList>
          <Link href="/como-escolher" onClick={closeSidebar}>
            Como escolher um pet?
          </Link>
        </InfoList>

        <InfoList>
          <Link href="/adote" onClick={closeSidebar}>
            Adote um pet
          </Link>
        </InfoList>

        <InfoList>
          <Link href="/contato" onClick={closeSidebar}>
            Contato
          </Link>
        </InfoList>
      </Container>
      <SpanOverlay sidebar={!active.toString()} onClick={closeSidebar} />
    </>
  )
}
export default Sidebar
