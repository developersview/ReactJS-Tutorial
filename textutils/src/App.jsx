import { useState } from "react";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    } else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter text to analyze" mode={mode} />
    </>
  );
}

export default App;
