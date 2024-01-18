import ReduxProvider from "@/providers/ReduxProvider";
import "@/pages/globals.scss";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function App({ Component, pageProps }) {
    return (
        <ReduxProvider>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Component {...pageProps} />
            </LocalizationProvider>
        </ReduxProvider>
    );
}
