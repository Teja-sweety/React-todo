import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

const App: React.FC = () => {
  return (
    <div className="App">
    <span className="p-float-label">
        <InputText id="in" value="123" />
        <label htmlFor="in">Username</label>
    </span>
      <Button label="Save" />
    </div>
  );
}

export default App;
