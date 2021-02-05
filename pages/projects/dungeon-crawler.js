import { Heading, NavLink, Container } from 'theme-ui';
import Header from '../../components/header'
import BackButton from '../../components/back-button'

export default function Page(){
    return (
        <div sx={{ textAlign: "center"}}>
            <Header>Dungeon Crawler | MEA Hack Club</Header>
            <BackButton href="/projects">Projects</BackButton>

            <Container sx={{textAlign: 'center'}}>
                <Heading as="h1" variant="title" sx={{ mb: 5 }}>
                    Dungeon Crawler
                </Heading>
                <Container sx={{ mb: 3 }}>
                    Inspired by a {' '}
                    <NavLink href="https://workshops.hackclub.com/dungeon_crawler/">
                        Hackclub Workshop, 
                    </NavLink>
                    {' '}we created a variation of a dungeon crawler using the {' '}
                    <NavLink href="http://www.pythonlake.com/python/turtle/">
                        turtle 
                    </NavLink>
                    {'    '} library. Run it and control the turtle with WASD!
                </Container>
                <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@ShawnZhuang/Dungeon-Workshop?lite=true&outputonly=1"></iframe>
            </Container>
        </div>
    );
}