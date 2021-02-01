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
            <Text variant="caption" sx={{ m:'5', fontSize:['31px', '31px', '31px', '20px', '20px'], textAlign:'center' }}>
                <code>
                    Have you ever stopped while browsing the internet, wondering what makes a website tick? {'    '} <br/> <br/>
                    <Image sx={{ width: '100px', bg: 'white'}} src="images/clock.gif"/> <br/> <br/>
                    What plays the role of DNA in websites all over, which are so entangled with our modern day to day lives? <br/> <br/>
                    <Image sx={{ width: '130px', bg: 'white'}} src="images/dna.gif"/> <br/> <br/>
                    Or even while playing games, have you ever wondered while stomping on Goombas, what makes them follow Mario? What could be going through their sinister minds as they go to such lengths to stop that middle aged plumber? <br/> <br/>
                    <Image sx={{ width: '100px', bg: 'white'}} src="images/mario.gif"/> <br/> <br/>
                    Well, the answer to that is code. Code is the like the code is the building block of our virtual world, providing the foundation for everything that you see on your computer. 
                </code>
            </Text>
            <Text variant="subheadline" sx={{ textAlign: 'center' }}>
                You'll get a chance to learn all about that, and more, with the MEA Hack Club! 
            </Text>
            <Text variant="caption" sx={{ fontSize: 2,m: 5 }}>
                <code>
                    At Mt. Everest Academy's only computer science focused club/program, you'll get to:
                    <ul>
                        <li>
                            Work with other MEA students to learn programming and develop games and other cool programs and application- share your projects on this website for others to try out!
                        </li>
                        <li>
                            Beginners and experienced programmers alike are welcomed! Whether you're looking to study computer science in the future or just want to tinker with code for fun, we encourage you to join.
                        </li>
                        <li>
                            Go beyond developing programs and get a chance to connect with community professionals to learn more about the field, and potentially take part in other community initiatives in the future.
                        </li>
                    </ul>

                    </code>
            </Text>
        <Text variant="subheadline" sx={{ textAlign: 'center' }}>
            Join today by completing the sign up form linked at the top of our website!
        </Text>
        </div>
    );
}