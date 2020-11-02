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
            <link rel="manifest" href="static/manifest.json"/>
            <link rel="icon" href="favicon.ico" type="image/x-icon" />  
            <link rel="apple-touch-icon" href="static/hello-icon-152.png"/>   
            <meta name="theme-color" content="white"/>  
            <meta name="apple-mobile-web-app-capable" content="yes"/>  
            <meta name="apple-mobile-web-app-status-bar-style" content="black"/> 
            <meta name="apple-mobile-web-app-title" content="Hello World"/> 
            <meta name="msapplication-TileImage" content="static/hello-icon-144.png"/>  
            <meta name="msapplication-TileColor" content="#FFFFFF"></meta>
            <link rel="stylesheet" href="static/style.css"></link>
            <script src="static/main.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument