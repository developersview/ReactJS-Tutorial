import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About" />
      <TextForm heading="Enter text to analyze" />
    </>
  );
}

export default App;
