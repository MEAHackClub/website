import theme from '@hackclub/theme';
import { jsx, Container, Image } from 'theme-ui';
import Theme from '../lib/theme';
import Head from 'next/head';

export default function Page(){
    return (
        <div>
            <Head>
                <title>MEA Hack Club</title>
            </Head>
            <Image src={Theme.images.home_background}
                sx={{
                    position: 'absolute',
                }}
            />
        </div>
    );
}