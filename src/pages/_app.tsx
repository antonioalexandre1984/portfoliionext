import type { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactNotifications />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
