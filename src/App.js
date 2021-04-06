import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Home from "./containers/Home/Home"
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import SidebarContext from "./contexts/SidebarContext";
import "./App.css";

function App() {
  // Controls the display state of the sidebar
  const [sidebarDisplay, setSidebarDisplay] = useState(false);

  useEffect(()=> {
    // Detect a click outside of the sidebar and set the sidebarDisplay state to false
    document.addEventListener("click", (e)=> {
      // Check to see if the target is not the sidebar or the navbar hamburger menu icon
      if(e.target !== document.querySelector(".sidebar") && e.target !== document.getElementById("hamburger-open")) {
        setSidebarDisplay(false);
      }
    })
  },[]); 

  return (
    <div className="App">
      <Router>
        <SidebarContext.Provider value={setSidebarDisplay}>
          <Navbar />
          {sidebarDisplay && <Sidebar />}
        </SidebarContext.Provider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
