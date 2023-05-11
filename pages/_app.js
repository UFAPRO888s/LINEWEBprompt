import "../styles/globals.css";
import { LiffProvider } from "../hooks/useLiff";

function MyApp({ Component, pageProps }) {
  return (
    <LiffProvider>
      <Component {...pageProps} />
    </LiffProvider>
  );
}

export default MyApp;

