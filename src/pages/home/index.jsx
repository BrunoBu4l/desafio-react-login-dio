// import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import bannerImage from '../../assets/banner.png';
import { Button } from "../../components/Button";
import { Header} from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const entrar = () => {
        navigate('/login')
      
    }

    const hooks = () => {
        navigate('hooks')
    }

    return (<>
    <Header />
    <Container>
        <div>
            <Title>
                <TitleHighLight>
                    Implemente
                    <br/>
                </TitleHighLight>
                o seu futuro global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant="secundary" onClick={entrar}/>
            <Button title="Hooks" variant="primary" onClick={hooks}/>
        </div>
        <div>
            <img src={bannerImage} alt="Banner da dio" />
        </div>
    </Container> 
    </>)
}

export { Home }