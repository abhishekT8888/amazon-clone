import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RootLayout>
         <Provider store={store}>
         <Component {...pageProps} />
         </Provider>
      </RootLayout>
    </div>
  );
}
