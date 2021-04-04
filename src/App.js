import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Home from "./containers/Home/Home"
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import SidebarContext from "./contexts/SidebarContext";
import "./App.css";

function App() {
  const [sidebarDisplay, setSidebardisplay] = useState(false);

  return (
    <div className="App">
      <Router>
        <SidebarContext.Provider value={ setSidebardisplay}>
          <Header />
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
