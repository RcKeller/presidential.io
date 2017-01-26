import * as C from './constants'

//    /////
//    IMPORT DEPENDENCIES
//    /////
import React from 'react'
import { render } from 'react-dom'
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
import App from './containers'

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
    <App />
  </MuiThemeProvider>
), document.getElementById('app'))
