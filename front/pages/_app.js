import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { wrapper, store } from "../redux/store";
import Layout from "../components/Layout";
import Head from "next/head";
import { Provider } from "react-redux";
import { RouteGuard } from "../components/RouteGuard";
import "react-multi-carousel/lib/styles.css";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <RouteGuard>
          <Component {...props.pageProps} />
        </RouteGuard>
      </Layout>
    </Provider>
  );
}

export default MyApp;
