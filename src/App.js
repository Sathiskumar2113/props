import logo from './logo.svg';
import './App.css';
import Bin from './Components/Bin';

function App() {

  const resiveData=(logged)=>{

    console.log('resive Data', logged);
}

  return (
    <div className="App">
      
      <Bin
      sentData={resiveData}
      ></Bin>

    </div>
  );
}

export default App;
