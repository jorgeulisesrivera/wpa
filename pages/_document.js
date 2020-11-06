import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charset="utf-8"/>
        <title>Hello World</title>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="images/apple-icon-152x152.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="white"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="apple-mobile-web-app-title" content="Hello World"/>
        <meta name="msapplication-TileImage" content="images/android-icon-144x144.png"/>
        <meta name="msapplication-TileColor" content="#FFFFFF"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument