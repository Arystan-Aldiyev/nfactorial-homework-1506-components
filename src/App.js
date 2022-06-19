import { useState } from 'react';

import { DefaultContext } from './Context';
import { LightModeProvider } from './LightContext';

//импортируем стили
import "./App.css";

import { Header } from "./components/header"
import { Content } from "./components/content"
import { Footer } from './components/footer';

export default function App() {
  const [fan, setFan] = useState("");

  const handleFavCharacter = ({ name }) => {
    setFan(name);
  }

  return (
    <LightModeProvider>
      <DefaultContext.Provider value={{ handleFavCharacter }}>
        <Header fan={fan} />
        <hr />
        <Content />
        <hr />
        <Footer />
      </DefaultContext.Provider>
    </LightModeProvider>
  );
}