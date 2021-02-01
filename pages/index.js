import theme from '@hackclub/theme';
import { NavLink, Box, jsx, Text, Link, Image, Heading, Container } from 'theme-ui';
import { Helmet } from 'react-helmet';
import Head from 'next/head';
import Content from '../components/index-content.mdx';

export default function Page(){
    return (
        <div>
            <Helmet>
                <title>MEA Hack Club</title>
                <link rel="shortcut icon" href="/static/favicon.ico"/>
            </Helmet>
            <Container sx={{position:'absolute', top:[1,2],width:[100,200]}}>
                <Image sx={{ width: [200,200,200,100,100] }}src="images/logo.png"/>
            </Container>
            <Box sx={{ bg: 'sheet', color:'text'}} as="header">
                <Container sx={{ paddingTop: ['160px','160px','160px',5,5], paddingBottom: [3, 4], textAlign: 'center' }}>
                    <Heading sx={{fontSize:[7, 7, 7, 6, 6]}} as="h1" color="red" variant="title" >
                        MEA Hack Club
                    </Heading>
                    <Text sx={{ fontSize:[5, 5, 5, 3, 3], paddingTop: '3', display:'flex',alignItems:'center',justifyContent:'center',flexDirection:['column','column','column','row','row'] }}>
                        <NavLink href="https://github.com/MEA-Hack-Club" sx={{ m:'10px'}}>GitHub</NavLink>
                        <NavLink href="/projects" sx={{ m:'10px'}}>Projects</NavLink>
                    </Text>
                </Container>
            </Box>
            <Container sx={{ mt:'5', textAlign:'left' }}>
                <Content/>
            </Container>
            
        </div>
    );
}