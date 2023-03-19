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
import { ResponsiveHome } from "./components/ResponsiveHome"
import { ResponsiveNav } from "./components/ResponsiveNav"
import { LoginResponsive } from "./components/LoginResponsive"
import { SearchPhoto } from "./components/SearchPhoto"
import { useWindowSize } from './Hooks/useWindowSize';
import { ProtectedRoute } from "./components/ProtectedRoute"
import { ProtectedRouteL } from "./Hooks/ProtectedRouteL"

function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // llama a la función de manejo de tamaño inicialmente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(useWindowSize().width);
  return (
    <div className="App">
      { (location.pathname === "/Profile" && !isMobile || location.pathname === "/" && !isMobile) && <Navbar />}
      {  (location.pathname === "/" && isMobile) && <ResponsiveNav />}
       <Routes>
          <Route path='/Profile' element={<Profile />}/>
          {/* <Route path='/Login' element={isMobile ? <LoginResponsive/> : <Login />} /> */}
          <Route path='/Login' element={<ProtectedRouteL isAllowed={useWindowSize().width}/>} />
          <Route path='/Register' element={<Register />} />
          {/* <Route path='/' element={isMobile ?  <ResponsiveHome/> : <Home /> } /> */}
          <Route path='/' element={<ProtectedRoute isAllowed={useWindowSize().width}/>} />
          <Route path='/Posts' element={<Posts />} />
          <Route path='/Menu' element={<MenuLateral />} />
          <Route path="/Historias" element={<Historys />} />
          <Route path='/Footer' element={<Footer />}/>
          <Route path='/Search' element={<Search />}/>
          <Route path='/SearchPhoto' element={<SearchPhoto />}/>
       </Routes>
        {isMobile && <Footer />} 
    </div>
  );
}
export default App;


