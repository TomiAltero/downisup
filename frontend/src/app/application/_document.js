// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark-mode-loading">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const theme = localStorage.getItem('theme');
                  const htmlClassList = document.documentElement.classList;
                  
                  if (theme === 'dark') {
                    htmlClassList.add('dark');
                  } else {
                    htmlClassList.remove('dark');
                  }

                  htmlClassList.remove('dark-mode-loading'); // Quita la clase temporal una vez determinado el tema
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
