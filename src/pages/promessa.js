import Menu from "./components/navbar"
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import { useState } from "react";

export default function Promessa() {
    const [divida, setDivida] = useState("")
    setTimeout(() => {
        document.title = "Minha Promessa";
        setDivida("da minha vida")
    }, 4000);
    return <>
        <Menu/>
        <Container>
            Promessas {(
                divida ==="" ? "<carregando>" : divida
            )}
        </Container>
        <Footer/>
    </>     
}