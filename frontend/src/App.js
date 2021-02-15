import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Routes from './Rotues/Routes';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
