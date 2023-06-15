import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About" />
      <div className="container">
        <TextForm heading="Enter text to analyze" />
      </div>

    </>
  );
}

export default App;
