import { Heading, NavLink, Container } from 'theme-ui';
import Header from '../components/header'
import BackButton from '../components/back-button'

export default function Page({ header, title, children}){
    return (
        <div sx={{ textAlign: "center"}}>
            <Header>{header} | MEA Hack Club</Header>
            <BackButton href="/projects">Projects</BackButton>

            <Container>
                {title && <Heading as="h1" variant="title" sx={{ textAlign: 'center', mb: 5 }}>
                    {title}
                </Heading>}
                <Container sx={{ mb: 3 }}>
                    {children}
                </Container>
            </Container>
        </div>
    );
}