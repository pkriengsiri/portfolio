import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Contact from "./containers/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
