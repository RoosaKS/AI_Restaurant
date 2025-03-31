import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import FI from "./locales/fi.json";
import EN from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fi: { translation: FI },
    en: { translation: EN }
  },
  lng: "fi", // Oletuskieli
  fallbackLng: "fi",
  interpolation: { escapeValue: false }
});

export default i18n;
