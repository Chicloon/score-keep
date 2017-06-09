import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Tracker } from 'meteor/tracker';



import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const history = createBrowserHistory();
history.listen((location, action) => {
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})

let isAuthenticated = 'asd';

// const authRoute = (

// );

const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="/links" component={Link} />
        <Redirect from="/" exact to="/login" />
        <Route component={NotFound} />        
      </Switch>
      <button onClick={history.goBack}> Back </button>
      {console.log(isAuthenticated)}
    </div>
  </Router>
);

Tracker.autorun(()=>{
  isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated', isAuthenticated);
  const currenPage = history.location.pathname;
  console.log(currenPage);
});


Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
