import React from "react";
import { Provider } from "react-redux";

import Head from "next/head";

import store from "store";

import "@/assets/styles/reset.css";
import "@/assets/styles/globals.css";
import "@/assets/styles/webflow.css";
import "@/assets/styles/gc9-webflow.css";
import "@/assets/styles/overwrite.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
