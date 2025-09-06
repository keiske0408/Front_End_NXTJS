import type { AppProps } from "next/app";
import React, {Suspense} from "react"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from "next/head";
import Page from './shared/Page';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width'/>
      </Head>
      {/*Page,Suspense, Component*/}
      <Page>
        <Suspense>
          <Component {...pageProps} />
        </Suspense>
      </Page>
    </>
  )
}
