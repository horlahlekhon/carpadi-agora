import '../styles/globals.css'
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from "../src/store";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#243773',
        },
        secondary: {
            main: '#000000',
        },
    },
});

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </PersistGate>
      </Provider>
  )
}

export default MyApp
