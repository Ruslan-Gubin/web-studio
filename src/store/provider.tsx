"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persist, store } from "./store";
import { SessionProvider } from 'next-auth/react';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
    <Provider store={store}>
      <PersistGate persistor={persist} loading={null}>
         {children}
      </PersistGate>
    </Provider>
    </SessionProvider>
    )
}