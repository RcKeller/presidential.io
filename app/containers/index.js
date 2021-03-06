import * as C from '../constants'
// import mobile from 'is-mobile'
//
// console.log(mobile())
// import Initial from '../initial'
//  import Initial from '../initial.json'

//    /////
//    DEPENDENCIES
//    /////
import React from 'react'
import {Container} from 'react-grid-system'
//  Backend
import firebase from 'firebase'
import ReactFireMixin from 'reactfire'

//    /////
//    UI COMPONENTS
//    /////
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

//    /////
//    COMPONENT
//    /////

//  LOADER
import CircularProgress from 'material-ui/CircularProgress'
const Loader = (
  <CircularProgress
    style={C.Theme.circularProgress}
    color={C.Accent.b}
  />
)

const mobile = 768

var App = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function () {
    let mobileDevice = (window.innerWidth < mobile)
    return {
      mobile: mobileDevice,
      nav: !mobileDevice,
      /*
      Firebase Data
      */
      data: {
        categories: {
          foreignPolicy: []
        },
        sidebar: {}
      }
    }
  },

  componentWillMount: function () {
    let d = firebase.database().ref('data')
    this.bindAsObject(d, 'data')
  },

//  Mobile listeners. I'll see if a simple lib can remove this need.
  resize: function () {
    let mobileDevice = (window.innerWidth < mobile)
    this.setState({
      mobile: mobileDevice,
      nav: !mobileDevice
    })
  },
  componentDidMount: function () {
    window.addEventListener('resize', this.resize)
  },
  componentWillUnmount: function () {
    window.removeEventListener('resize', this.resize)
  },

  render: function () {
    //  Margins adjust to the state of the nav
    let bodyStyle = {
      marginTop: C.elementHeight,
      marginLeft: (this.state.nav && !this.state.mobile ? 250 : 0)
    }
    console.log(this.state)
    return (
      <div style={{overflowX: 'hidden'}}>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <Drawer
          open={this.state.nav}
          docked={!this.state.mobile}
          onRequestChange={(nav) => this.setState({nav: !this.state.nav})}
          containerStyle={C.Theme.drawer}
        >
          {this.state.data.sidebar ? <Sidebar {...this.state.data.sidebar} />
          : Loader }
        </Drawer>
        <AppBar
          title='Executive Action'
          titleStyle={{fontStyle: 'italic'}}
          onTouchTap={() => this.setState({nav: !this.state.nav})}
          style={C.Theme.appBar}
        />
        <div style={bodyStyle}>
          <Container style={C.Theme.container}>
            {React.cloneElement(this.props.children, {data: this.state.data})}
          </Container>
          <Footer />
        </div>
      </div>
    )
  }
})

export default App
