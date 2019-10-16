import React from 'react';
import './App.css';
import Person from './Person/Person.js';

function App() {
  return (
    <div className="App">
      <h1>Bob's Burger Builder</h1>
      <p>Your burger, your way!</p>
      <Person name='Max' age='28'>My Hobbies: Racing, Painting</Person>
      <Person name='Manu' age='29' />
      <Person name='Stephanie' age='26'/>
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render() {
//     return(
//       <div className='App'>
//         <h1>Bob's Burger Builder</h1>
//       </div>
//     );
    
// }



