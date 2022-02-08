import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// custom scss
import "./global.scss";
// Components
import Home from "./pages/Home";
// react router
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProvider } from "./UserContext/UserContext";
import Delete from "./pages/Delete";
import ReadComp from "./pages/Read";
import CreateUser from "./pages/Create";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <>
      <Switch>
        <UserProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/delete/:id" component={Delete} />
          <Route exact path="/read/:id" component={ReadComp} />
          <Route exact path="/create" component={CreateUser} />
          <Route exact path="/edit/:id" component={Edit} />
        </UserProvider>
      </Switch>
    </>
  );
};

export default App;
