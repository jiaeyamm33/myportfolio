import Header from "./Header";
import Nav from "./components/Nav";
import Main from "./Main";
import Footer from "./Footer";
import Process from "./components/Process";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Intro from './Intro';
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import './css/reset.css';
import './css/common.css';
import './css/responsive.css';
import { useEffect } from "react";


function App() {
  const [ load, setLoad ] = useState(true);
  const [ thema, setThema ] = useState(0);
 
  let themalist;

  if (thema === 0) {
    themalist = '#FFF8DF';
  } else if (thema === 1) {
    themalist = 'linear-gradient(180deg, #FBC2EB 0%, rgba(166, 193, 238, 0) 100%)';
  } else if (thema === 2) {
    themalist = '#8DD2F0';
    }

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setLoad(false);
    }, 1600);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    
    
    <div className="App" style={{ background: themalist }}>
       {load ? (
        <Intro />
      ) : (
        <>
       <Header />
          <main className="flex">
            <HashRouter>
              <Nav setThema={setThema} />
              <Routes>
                <Route path="/" element={<Main thema={thema} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Process thema={thema} />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </HashRouter>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}


export default App;
