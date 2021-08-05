import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>MBAnalyst</title>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="MBAnalyst"
                        content="Consulting services"
                    />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='MBAnalyst' />
                    <meta property='og:description' content='MBAnalyst - website' />
                    <meta property='og:site_name' content='MBAnalyst' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
