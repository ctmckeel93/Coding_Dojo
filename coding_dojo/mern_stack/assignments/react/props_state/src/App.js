import React from 'react'
import './App.css';
import MyComponent from './components/Birthday'

function App() {
  return (
    <div className="App">
      <MyComponent lastName="Doe" firstName="Jane" age={ 45 } hairColor="Black" />
      <MyComponent lastName="Smith" firstName="John" age={ 88 } hairColor="Brown"/>
      <MyComponent lastName="Fillmore" firstName="Millard" age={ 50 } hairColor="Brown"/>
      <MyComponent lastName="Smith" firstName="Maria" age={ 52 } hairColor="Brown"/>
    </div>
  );
}

export default App;
