import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/Shared/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Shared/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Shared/Login/RequireAuth';
import CompleteTask from './Pages/User/CompleteTask';
import ToDo from './Pages/User/ToDo';
import Calender from './Pages/User/Calender';

function App() {
  return (
    <div className="App bg-gray-500">
      <NavBar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/complete-task' element ={<RequireAuth>
          <CompleteTask/>
        </RequireAuth>
      }/>
        <Route path='/to-do' element ={<RequireAuth>
          <ToDo/>
        </RequireAuth>
      }/>
        <Route path='/calender' element ={<RequireAuth>
          <Calender/>
        </RequireAuth>
      }/>

        <Route path='/login' element ={<Login/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
