import logo from './logo.svg';
import './App.css';
import Bin from './Components/Bin';
import { useState } from 'react';

function App() {

  const [user,setUser]=useState('');

  const resiveData=(logged)=>{

   setUser(logged);
}

  return (
    <div className="App">
      
      <h1>hahaha   {user}  </h1>
      <Bin
      sentData={resiveData}
      ></Bin>

    </div>
  );
}

export default App;
