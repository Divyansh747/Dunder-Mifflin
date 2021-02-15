import './App.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useSelector } from 'react-redux';
import Routes from './Rotues/BeforeLoginRoutes';
import BeforeLoginNavbar from './Components/Shared/BeforeLoginNavbar';
import AfterLoginNavbar from './Components/Shared/AfterLoginNavbar';



import AfterLoginRoutes from './Rotues/AfterLoginRoutes';
import BeforeLoginRoutes from './Rotues/BeforeLoginRoutes';



function App() {
  const authState = useSelector(state => state.authReducer);
  console.log('authState: ', authState);
  useEffect(() => {
    // return ();
  }, []);
  return (

    <div className="App container">
      {
        !authState?.isAuthenticated ? <AfterLoginNavbar/> : <BeforeLoginNavbar/>
      }
      {
        authState?.isAuthenticated ? <BeforeLoginRoutes /> : <AfterLoginRoutes />
      }
    </div>

  );
}

export default App;
