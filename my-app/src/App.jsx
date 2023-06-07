import React from 'react';
import SampleHookPractice from './SampleHookPractice';
import Learning from './Learning';
import Person from './Person';

function App() {


  return (
    <>
      <SampleHookPractice />
      <Learning name={''} />
      <br />
      <Person personObj='person1' />
    </>
  );
}

export default App;
