import Navbar from './components/Navbar';
import './App.css';
import { Route,Routes } from 'react-router';
import Home from './pages/Home'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useState } from 'react';
function App() {
  const [isLoggesIn,setLoggedIn] = useState(false);

  return (
    <div className="App">
     <Navbar isLoggesIn={isLoggesIn} setLoggedIn={setLoggedIn}/>

     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}></Route>
     <Route path='/signup' element={<Signup setLoggedIn={setLoggedIn}/>}></Route>
     <Route path='/dashboard' element={<DashBoard/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
