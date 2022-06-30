import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Shared/Login/Login';

function App() {
  return (
    <div className="App bg-gray-500">
      <NavBar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
