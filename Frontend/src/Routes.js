import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './AuthComponents/SignIn';
import SignUp from './AuthComponents/SignUp';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/signin' exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;