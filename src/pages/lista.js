import Menu from './components/navbar';
import { Container, Accordion} from 'react-bootstrap';
import Footer from './components/footer';

export default function Lista() {
    var noticias = [
            {
                id: 1,
                titulo: "Nova vacina contra gripe é aprovada",
                conteudo: "Uma nova vacina contra a gripe foi aprovada pelas autoridades de saúde e promete ser mais eficaz contra as cepas mais comuns."
            },
            {
                id: 2,
                titulo: "Tecnologia 5G chega a mais cidades do Brasil",
                conteudo: "O governo anunciou a expansão da cobertura 5G, com novas cidades recebendo acesso à tecnologia de internet móvel mais rápida."
            },
            {
                id: 3,
                titulo: "Estudo revela benefícios da meditação para a saúde mental",
                conteudo: "Pesquisadores descobriram que a prática regular da meditação pode reduzir sintomas de ansiedade e depressão."
            },
            {
                id: 4,
                titulo: "Oceano Atlântico enfrenta aumento de temperatura",
                conteudo: "Um novo relatório aponta que a temperatura do Oceano Atlântico está aumentando, trazendo preocupações sobre os efeitos nas correntes marítimas."
            },
            {
                id: 5,
                titulo: "Festival de cinema traz obras de todo o mundo",
                conteudo: "O festival anual de cinema apresenta filmes de diversos países, promovendo a cultura e a diversidade no setor audiovisual."
            }
        ]

    
    return (
        <>
            <Menu />
            <Container>
                <Accordion>
                    {noticias.map( noticia =>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{noticia.titulo}</Accordion.Header>
                        <Accordion.Body>
                            {noticia.conteudo}
                        </Accordion.Body>
                    </Accordion.Item>
                    )}
                </Accordion>
            </Container>
            <Footer/>
        </>
    );
}

