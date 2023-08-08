import React from 'react'
import Header from './components/Header';
import spinaci from './assests/spinaci.jpg';

const App = () => {
  return (
    <>
      <Header />
      <Pizza />
      <Pizza />
    </>
  )
}

function Pizza() {
  return (
    <div>
      <img src={spinaci} alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  )
}

export default App