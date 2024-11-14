import Menu from "./components/navbar";
import Footer from "./components/footer";
import {Container} from 'react-bootstrap';
import CardProd from "./components/cardprod";

export default function Pesportes() {
  return <>
  <Menu /> 
  <Container className>
    <div>
        <CardProd titulo={"Bola de voley"} descricao={"Bola de voley"} preco={99.00}/>
        <CardProd titulo={"Bola de futebol"} descricao={"Bola de futebol"} preco={120.00}/>
        <CardProd titulo={"Bola de handball"} descricao={"Bola de handball"} preco={75.00}/>
    </div>
  </Container>
  <Footer />
  </>
}
