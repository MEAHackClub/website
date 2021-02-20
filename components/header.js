import { Helmet } from 'react-helmet'

export default function Header({ children }){
    return (
        <Helmet>
            <title>{children}</title>
            <link rel="shortcut icon" href="/static/favicon.ico"/>
        </Helmet>
    )
}