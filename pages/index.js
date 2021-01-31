import theme from '@hackclub/theme';
import { NavLink, Box, jsx, Text, Link, Image, Heading, Container } from 'theme-ui';
import Head from 'next/head';

export default function Page(){
    return (
        <div>
            <Head>
                <title>MEA Hack Club</title>
            </Head>
            <Box sx={{ bg: 'sheet', color:'text'}} as="header">
                <Container sx={{ paddingTop: 5, paddingBottom: [3, 4], textAlign: 'center' }}>
                    <Heading as="h1" color="red" variant="title" >
                        MEA Hack Club
                    </Heading>
                    <Text sx={{ paddingTop: '3', display:'flex',alignItems:'center',justifyContent:'center' }}>
                        <NavLink href="https://github.com/MEA-Hack-Club" sx={{ m:'10px'}}>GitHub</NavLink>
                        <NavLink href="/projects" sx={{ m:'10px'}}>Projects</NavLink>
                    </Text>
                </Container>
            </Box>
            
        </div>
    );
}