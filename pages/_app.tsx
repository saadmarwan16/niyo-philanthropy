import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "../src/modules/auth/AuthContext";
import DrawerContextProvider from "../src/shared/contexts/DrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <DrawerContextProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
        <Component {...pageProps} />
      </DrawerContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
