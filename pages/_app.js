import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  )
}

export default MyApp
