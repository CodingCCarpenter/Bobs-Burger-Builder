import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }

  render(){
  return (
    <div className="App">
      <h1>Bob's Burger Builder</h1>
      <p>Your burger, your way!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing, Painting</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );
  }
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



