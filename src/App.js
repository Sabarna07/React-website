import react from "react"
import {BrowserRouter as Router ,Link, Switch,Route} from "react-router-dom"
import "./App.css"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer/Footer"
import home from "./Pages/home";
import {GlobalStyle} from './globalStyle'

function App() {
  return (
    <Router>
    <GlobalStyle/>
   <Navbar/>
   <Switch>
      <Route path="/" exact component = {home}  />
   </Switch>
   <Footer/>
   </Router>
  );
}

export default App;
