import MyButton from "./MyButton";
import { useState } from 'react'

function App() {
  const [initialCount, setCount] = useState(0);
  const handleClick = () => {
    setCount(initialCount + 1);
  }

  return (
    <>
      <h1>Welcome to My App</h1>
      <MyButton count={initialCount} onClick={handleClick} />
      <br /><br />
      <MyButton count={initialCount} onClick={handleClick} />
    </>
  );
}

export default App;
