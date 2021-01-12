import React from 'react'
import './App.css';
import Functional from './components/functional'
function App() {
  return (
    <div className="App">
      <Functional lastName="Doe" firstName="Jane" age={ 45 } hairColor="Black" />
      <Functional lastName="Smith" firstName="John" age={ 88 } hairColor="Brown"/>
      <Functional lastName="Fillmore" firstName="Millard" age={ 50 } hairColor="Brown"/>
      <Functional lastName="Smith" firstName="Maria" age={ 52 } hairColoFunctional/>
    </div>
  );
}

export default App;
