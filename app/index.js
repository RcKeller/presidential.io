import * as C from './constants'

//    /////
//    IMPORT DEPENDENCIES
//    /////
import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()// Soft dependancy for Material-UI

import firebase from 'firebase'
firebase.initializeApp(C.FirebaseConfig)

//    /////
//    MATERIAL-UI THEME SETUP
//    /////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
const materialUITheme = getMuiTheme(C.Theme)

//    /////
//    PAGES
//    /////
import App from './containers/'
import Home from './components/Home/Home'
import {ForeignPolicy, Environment, Education, Economics, SocialWelfare} from './components/Pages/Pages'

//    /////
//    TESTING
//    /////
if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf')
}

//    /////
//    RENDER
//    /////
render((
  <MuiThemeProvider muiTheme={materialUITheme}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='foreign-policy' component={ForeignPolicy} />
        <Route path='environment' component={Environment} />
        <Route path='education' component={Education} />
        <Route path='economics' component={Economics} />
        <Route path='social-welfare' component={SocialWelfare} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))

/*
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="submit" component={Submit}/>
    <Route path="about" component={About}/>
  </Route>
</Router>
 */
