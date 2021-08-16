import "./App.css";
import "./ScrollbarStyle.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SignIn from "./AuthComponents/SignIn";
import SignUp from "./AuthComponents/SignUp";
import Grouppage from "./Pages/Grouppage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/group" exact component={Grouppage} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
