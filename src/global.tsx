import {Head} from "minista"
import Header from "@/layouts/Header";
import Content from "@/layouts/Content";
import Footer from "@/layouts/Footer";
import '@/styles';
import {GlobalProps} from "minista/dist/types/shared";
import Banner from "@/sections/Banner";

import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default ({children, title, url, isHeaderFixed}: GlobalProps) => {
    return (
        <>
            <Head htmlAttributes={{lang: 'en'}}>
                <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
                <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
                <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
                <link rel="manifest" href={manifest} />
                <title>Stream Vibe | {title}</title>
                <script src="/src/main.ts" type="module"/>
            </Head>
            <Header url={url} isFixed={isHeaderFixed} />
            <Content isResetPaddingTop={isHeaderFixed}>
                {children}
                <Banner />
            </Content>
            <Footer/>
        </>
    )
}
