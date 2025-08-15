import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isloaded, setIsLoaded]= useState(false)
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <Home/>
          <About/>
          <Projects/>
          <Contact></Contact>
      </div>
    </>
  );
}

export default App;
