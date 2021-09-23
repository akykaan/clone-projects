import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MyList from "../pages/MyList";

export default function Dashboard() {
  return (
    <div>
      <div class="md:container md:mx-auto">
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/my-list" component={MyList} />
      </div>
    </div>
  );
}
