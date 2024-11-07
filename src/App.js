import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import useDarkMode from "use-dark-mode";


function App() {
  const darkMode = useDarkMode(false);

  useEffect(() => {
    document.body.className = darkMode.value ? "dark-mode" : "light-mode";
  }, [darkMode.value]);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Aboutme" element={<AboutMe />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
