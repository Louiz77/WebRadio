import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Importa o Bootstrap JS apenas no lado do cliente
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []); // O array vazio garante que isso é executado apenas uma vez

  return <Component {...pageProps} />;
}

export default MyApp;
