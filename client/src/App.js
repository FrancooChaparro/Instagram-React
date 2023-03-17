import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from "react-router-dom" 
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Home } from './components/Home';
import { MenuLateral } from './components/MenuLateral';
import { Posts } from './components/Posts';
import  Historys  from './components/Historys';
import { Footer } from "./components/Footer";
import { Search } from "./components/Search"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // llama a la función de manejo de tamaño inicialmente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      { (location.pathname === "/Profile" && !isMobile || location.pathname === "/") && <Navbar />}
       <Routes>
          <Route path='/Profile' element={<Profile />}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/Posts' element={<Posts />} />
          <Route path='/Menu' element={<MenuLateral />} />
          <Route path="/Historias" element={<Historys />} />
          <Route path='/Footer' element={<Footer />}/>
          <Route path='/Search' element={<Search />}/>
       </Routes>
        {isMobile && <Footer />} 
    </div>
  );
}
export default App;


