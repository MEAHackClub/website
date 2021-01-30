import theme from '@hackclub/theme';
import { NavLink, Box, jsx, Text, Link, Heading, Container } from 'theme-ui';
import Theme from '../lib/theme';
import Head from 'next/head';

export default function Page(){
    return (
        <div>
            <Box sx={{ bg: 'sheet', color:'text'}} as="header">
                <Container sx={{ paddingTop: 5, paddingBottom: [3, 4], textAlign: 'center' }}>
                    <Heading as="h1" color="red" variant="title" >
                        MEA Hack Club
                    </Heading>
                    <Text sx={{ paddingTop: 3 }}>
                        <NavLink href="https://github.com/MEA-Hack-Club" sx={{ marginRight: '10px' }}>GitHub</NavLink>
                        <NavLink href="/projects" sx={{ marginLeft: '10px' }}>Projects</NavLink>
                    </Text>
                </Container>
            </Box>
            
        </div>
    );
}