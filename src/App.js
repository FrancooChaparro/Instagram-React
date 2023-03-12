import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from "react-router-dom" 
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import { MenuLateral } from './components/MenuLateral';
import { Posts } from './components/Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Posts' element={<Posts />} />
          <Route path='/Menu' element={<MenuLateral />} />
       </Routes>
    </div>
  );
}
export default App;
