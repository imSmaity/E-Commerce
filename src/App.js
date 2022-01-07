import Routes from './Routes/Routes';
import { Offline } from "react-detect-offline";

function App() {
  return (
    <div className="App">
      <Routes/>
      <div style={{color:'red'}}> 
        <Offline>You're offline right now. Check your connection.</Offline>
      </div>
    </div>
  );
}

export default App;
