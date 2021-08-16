import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { ReactElement } from "react";
import Layout from "src/layout/Layout";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
