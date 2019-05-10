import React from 'react';
import './App.css';
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom"


function App() {
  return (
    <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/rooms" component={Rooms}></Route>
    <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
    <Route component={Error}></Route>
    </Switch>
  );
}

export default App;
