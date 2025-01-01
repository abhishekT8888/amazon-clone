import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
