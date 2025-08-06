import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"

function App() {
  const [isloaded, setIsLoaded]= useState(false)
  return (
    <>
    (!isloaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>)
    </>
  );
}

export default App;
