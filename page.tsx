import Contato from "./components/contato/Contato";
import Header from "./components/header/Header";
import LayoutPaiTema from "./components/LayoutPaiTema";
import Menu from "./components/menu/Menu";
import SobreMim from "./components/sobreMim/SobreMim";

export default function Inicio(){
  return (
    <LayoutPaiTema>
      <Menu/>
      <Header/>
      <SobreMim/>
      <Contato/>
    </LayoutPaiTema>
  )
} 