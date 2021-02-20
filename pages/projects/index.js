import { Card, Text,Heading, Button, Container, Box, IconButton, NavLink } from 'theme-ui';
import { Helmet } from 'react-helmet';
import ProjectCard from '../../components/project-card'
import BackButton from '../../components/back-button'
import Header from '../../components/header'

export default function Page(){
    return(
        <div>
            <Header>
                Projects | MEA Hack Club 
            </Header>
            <BackButton href="/">
                Home
            </BackButton>
            <Box sx={{ mt: '4', textAlign: 'center' }}>
                <Container>
                    <Heading as="h1" variant="title" sx={{ mb: 4 }}>
                        Current projects
                    </Heading>
                    <Container sx={{ display:'flex', justifyContent:'space-evenly', textAlign:'left'}}>
                        <ProjectCard href="/projects/mea-platformer">
                            MEA Platformer Game (in progress)
                        </ProjectCard>
                    </Container>
                    <Heading as="h1" variant="title" sx={{ m: 4 }}>
                        Past projects
                    </Heading>
                    <Container sx={{ display:'flex', justifyContent:'space-evenly', textAlign:'left'}}>
                        <ProjectCard href="/projects/dungeon-crawler">
                            Python Dungeon Crawler
                        </ProjectCard>
                        <ProjectCard href="/projects/cyoa">
                            Choose Your Own Adventure Game
                        </ProjectCard>
                    </Container>
                </Container>
            </Box>
        </div>
    )
}