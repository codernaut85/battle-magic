import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Wizard from './entities/wizard';
import Warrior from './entities/warrior';

const updateMyWizard = fn => (obj, propName, propValue) => fn(obj.set(propName, propValue));

function App() {

  const [myWizard, setMyWizard] = useState(new Wizard({ 
    firstName: 'Gandalf',
    spell: 'Ice storm'
  }));

  const [myWarrior] = useState(new Warrior({
    firstName: 'Conan',
    blockStrength: 50
  }));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>My Wizard</h2>
          <p>Health: {myWizard.get("health")}</p>
          <p>Attack strength: {myWizard.get("attackStrength")}</p>
          <p>Full name: {myWizard.fullName()}</p>
          <button onClick={() => updateMyWizard(setMyWizard)(myWizard, 'health', 300)}>Update wizard</button>
          <button onClick={() => myWizard.castSpell()}>Cast spell</button>
        </div>
        <div>
          <h2>My Warrior</h2>
          <p>Health: {myWarrior.get("health")}</p>
          <p>Attack strength: {myWarrior.get("attackStrength")}</p>
          <p>Full name: {myWarrior.fullName()}</p>
          <button onClick={() => myWarrior.block()}>Block attack</button>
        </div>
      </header>
    </div>
  );
}

export default App;
