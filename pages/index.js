import theme from '@hackclub/theme';
import { jsx, Container, Image } from 'theme-ui';
import Nav from '../components/nav';
import Theme from '../lib/theme';
import Head from 'next/head';

export default function Page(){
    return (
        <div>
            <div className="content" sx={{zIndex:'100'}}> 
                <Head>
                    <title>MEA Hack Club</title>
                </Head>
                <Nav/>
            </div>

            <Image src={Theme.images.home_background}
                sx={{
                    position: 'relative',
                    zIndex: '0',
                }}
            />
        </div>
    );
}