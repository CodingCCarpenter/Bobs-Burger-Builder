import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <h1>Bob's Burger Builder</h1>
        <p>Your burger, your way!</p>
        <button>Switch Name</button>
        <Person name='Max' age='28'>My Hobbies: Racing, Painting</Person>
        <Person name='Manu' age='29' />
        <Person name='Stephanie' age='26'/>
     </div>
   );
    
 }


 
