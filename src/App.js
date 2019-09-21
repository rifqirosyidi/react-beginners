import React, {useState} from 'react';
import Tweet from './components/Tweet';
import IncrementCounter from './components/IncrementCounter';
import './App.css';
import ChangeColor from './components/ChangeColor';

function App() {

  const [users] = useState([
    { name: "Rifqi", message: "this is a random message" },
    { name: "Neutron", message: "this is not a random message" },
    { name: "Quantum", message: "this is from quantum world" },
    { name: "Planets", message: "this is messages from planet" }
  ])

  return(
    <div>
      <div>
        <h4 className="app">React</h4>
      </div>
      <div className="main-app">
        { users.map(user => (
          <Tweet name={user.name} message={user.message} />
        ))}
        
      </div>
      <div>
        <IncrementCounter />
      </div>
      <div>
        <ChangeColor />
      </div>
    </div>
  );
}

export default App;