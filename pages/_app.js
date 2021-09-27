import React from "react";
import { Provider } from "react-redux";
import { Provider as UrqlProvider } from "urql";

import Head from "next/head";
import store from "store";

import urqlClient from "setups/urql";

import "@/assets/styles/normalize.css";
import "@/assets/styles/webflow.css";
import "@/assets/styles/gc9-webflow.css";
import "@/assets/styles/custom-momentum.css";

import "@/assets/styles/overwrite.css";
import "@/assets/styles/overwrite-991.css";
import "@/assets/styles/new.css";
import "@/assets/styles/responsive.css";
import "@/assets/styles/order.css";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <UrqlProvider value={urqlClient}>
        <Component {...pageProps} />
      </UrqlProvider>
    </Provider>
  );
}

export default MyApp;
