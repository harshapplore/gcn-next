import { Provider } from "react-redux";
import store from "store";

import "assets/styles/reset.css";
import "assets/styles/globals.css";
import "assets/styles/webflow.css";
import "assets/styles/gc9-webflow.css";

function MyApp({ Component, pageProps }) {
  return <Provider store={store} ><Component {...pageProps} /></Provider>;
}

export default MyApp;