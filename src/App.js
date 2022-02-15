import './App.css';

import { Route, Routes } from "react-router-dom";
import Home from "./components/";
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import CssBaseline from '@mui/material/CssBaseline';



function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;


//<a href="https://www.flaticon.com/free-icons/man" title="man icons">Man icons created by Freepik - Flaticon</a>