import React from 'react';
import SampleHookPractice from './SampleHookPractice';
import Learning from './Learning';
import Person from './Person';
import Counter from './Counter';

function App() {


  return (
    <>
      <SampleHookPractice />
      <Learning name={''} />
      <br />
      <Person personObj='person1' />
      <br />
      <Counter />
    </>
  );
}

export default App;
