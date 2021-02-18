import React, { useState } from "react";
import { Provider } from "./data/LanguageContext";

import About from "./pages/About";
import MainPage from "./pages/MainPage";
import LanguageChoice from "./components/LanguageChoice";
import Technologies from "./pages/Technologies";

import { dictionary } from "./data/dictionary";

import "./styles/style.css";

function App() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (languageValue) => setLanguage(languageValue);

  return (
    <div className="wrapper">
      <Provider
        value={{
          label: dictionary[language],
          language: language,
          setLanguage: handleLanguageChange,
        }}
      >
        <LanguageChoice />
        <MainPage />
        <About />
        <Technologies />
      </Provider>
    </div>
  );
}

export default App;
