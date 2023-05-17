import Bienvenida from "../components/general/bienvenida";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Aqui va el nav papi */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
