import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head title="QueryPie :: A Fresh Design For Database IDE Get Ready!">
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta
            content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width"
            name="viewport"
          />

          <link color="#BE9300" href="/static/favicon.png" rel="mask-icon" />
          <link href="/static/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
