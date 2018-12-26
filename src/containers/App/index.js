import React from "react";
import LoginPage from "../LoginPage";
import Student from "../Student";
import Teacher from "../Teacher";
import urls from "../../routes.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path={urls.login} component={LoginPage} />
      <Route path={urls.student} component={Student} />
      <Route path={urls.teacher} component={Teacher} />
    </Switch>
  </Router>
);

export default App;
