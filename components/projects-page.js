import { Heading, NavLink, Container } from 'theme-ui';
import Header from '../components/header'
import BackButton from '../components/back-button'

export default function Page({ backButtonHref="/projects", backButtonText="Projects", header, title, children}){
    return (
        <div sx={{ textAlign: "center"}}>
            <Header>{header} | MEA Hack Club</Header>
            <BackButton href={backButtonHref}>{backButtonText}</BackButton>

            <Container>
                {title && <Heading as="h1" variant="title" sx={{ textAlign: 'center', m: 5 }}>
                    {title}
                </Heading>}
                <Container sx={{ borderRadius: '50px', p: 4, bg: 'sheet', mb: 3 }}>
                    {children}
                </Container>
            </Container>
        </div>
    );
}