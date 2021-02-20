import { Heading, NavLink, Container } from 'theme-ui';
import Header from '../../components/header'
import ProjectsPage from '../../components/projects-page'

export default function Page(){
    return (
        <ProjectsPage
            header="Dungeon Crawler" 
            title="Dungeon Crawler" 
        >
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
        </ProjectsPage>
    );
}