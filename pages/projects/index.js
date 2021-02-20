import { Text,Heading, Button, Container, Box, IconButton, NavLink } from 'theme-ui';
import { Helmet } from 'react-helmet';
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
                    <Heading as="h1" variant="title" sx={{ mb: 5 }}>
                        Current projects
                    </Heading>
                    <code>
                        <Text sx={{ fontSize: [4,4,4,1,1], m: [4, 4, 4, 2, 2] }}> 
                            <NavLink href="/projects/dungeon-crawler">
                                2/4/2021 - Python Dungeon Crawler
                            </NavLink>
                        <hr/>
                                A choose your own adventure game! Press the run button to try it out. 
                        </Text>
                    </code>
                    <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@ShawnZhuang/Hack-Club-17-Choose-Your-Own-Adventure?lite=true&outputonly=1"></iframe>
                </Container>
            </Box>
        </div>
    )
}