import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "./utils/enums";
import en from "./translations/en.json";
import ua from "./translations/ua.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
  },
  lng: Language.English,
  interpolation: { escapeValue: false },
});

export default i18n;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
