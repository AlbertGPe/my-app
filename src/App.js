import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import './index.css'
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
