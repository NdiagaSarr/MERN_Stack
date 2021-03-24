import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import listusers from "./components/list-users.component";
import listbyid from "./components/list-by-id.component";
import newuser from "./components/new-user.component";
import Fletch100users from "./components/fletch100users.component";

function App() {
  return (
    <Router>
      < div  className = "container" >
        <Navbar/>
        <br/>
        <Route path="/" exact component={listusers} />
        <Route path="/edit" component={listbyid} />
        <Route path="/add" component={newuser} />
        <Route path="/fletch" component={Fletch100users} />
      </div>
    </Router>
  );
}

export default App;
