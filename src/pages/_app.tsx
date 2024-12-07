import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store , persistor } from "@/store/store";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      
         <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
          </PersistGate>
         
         </Provider>
  
    </div>
  );
}
