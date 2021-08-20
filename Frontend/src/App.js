import './App.css';
import './ScrollbarStyle.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import SignIn from './AuthComponents/SignIn';
import SignUp from './AuthComponents/SignUp';
import Grouppage from './Pages/Grouppage';
import MainDashboard from './Pages/MainDashboard';
import { AppContext } from './Context/Context';
import { useState } from 'react';
function App() {
  const [currentUser, setcurrentUser] = useState({
    username: 'Sanket',
  });
  return (
    <AppContext.Provider value={{ currentUser, setcurrentUser }}>
      <Router>
        <Switch>
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/group' exact component={Grouppage} />
          <Route path='/dashboard' exact component={MainDashboard} />
          <Route path='/' exact component={Homepage} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
