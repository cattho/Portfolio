import { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "../src/components/NavBar";
import ThemeToggle from "../src/components/ThemeToggle/ThemeToggle.jsx";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/ThemeToggle/ThemeToggle.css";
import "../src/styles/App.css";
import "../src/styles/aboutStyles.css";
import "../src/styles/homeStyles.css";
import "../src/styles/index.css";
import "../src/styles/navStyles.css";
import "../src/styles/projectsStyles.css";
import "../src/styles/resumeStyles.css";
import "../src/styles/style.css";

function MyApp({ Component, pageProps }) {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ThemeToggle />
        {/* <ScrollToTop /> */}
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
