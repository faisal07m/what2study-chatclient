import i18next from "i18next";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import App from "./App";
import global_de from "./translations/de/global.json";
import global_en from "./translations/en/global.json";


i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources: {
        en: {
            global: global_en
        },
        de: {
            global: global_de
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
);
