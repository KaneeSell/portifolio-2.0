import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Projetos from "@/components/projetos/Projetos";
import Contato from "@/components/Contato";
import LayoutPaiTema from "@/components/LayoutPaiTema";
import Menu from "@/components/menu/Menu";
import SobreMim from "@/components/sobreMim/SobreMim";
import Tecnologias from "@/components/tecnologias/Tecnologias";

export default function Inicio() {
  return (
    <LayoutPaiTema>
      <Menu />
      <Header />
      <SobreMim />
      <Tecnologias/>
      <Projetos />
      <Contato />
      <Footer />
    </LayoutPaiTema>
  )
} 