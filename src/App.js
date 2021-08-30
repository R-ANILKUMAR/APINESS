import React from "react";
import LogInPage from "../src/components/logInPage";
import DashBoard from "./components/DashBoard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewForm from "./components/Newform";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact component={LogInPage} />
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/dashboard/new" exact component={NewForm} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
