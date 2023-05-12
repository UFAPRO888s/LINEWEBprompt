import "../styles/globals.css";
import { LiffProvider } from "../hooks/useLiff";
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <LiffProvider>
      <Component {...pageProps} />
   </LiffProvider>
  );
}

export default MyApp;

