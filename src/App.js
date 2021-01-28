import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./Components";
import Burger from './Components/Burger';
import styled from 'styled-components';


// const Ul = styled.nav`
//   width: 100%;
//   height: 55px;
//   border-bottom: 2px solid #f1f1f1;
//   padding: 0 20px;
//   display: flex;
//   justify-content: space-between;
//   .logo {
//     padding: 15px 0;
//   }
// `

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <Burger/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;