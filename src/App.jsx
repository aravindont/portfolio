import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import "./App.css";
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("themeMode") || "dark"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--bg-color", "#18181b");
      document.documentElement.style.setProperty("--text-color", "#fff");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--bg-color", "#fff");
      document.documentElement.style.setProperty("--text-color", "#000000cc");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("themeMode", "light");
      setTheme("light");
    } else {
      localStorage.setItem("themeMode", "dark");
      setTheme("dark");
    }
  };
  return (
    <div className="px-4 mx-auto sm:max-w-4xl">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="lg:px-10">
        <About />
        <ProjectList />
        <Footer />
      </div>
    </div>
  );
}
export default App;
