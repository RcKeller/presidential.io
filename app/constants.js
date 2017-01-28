export const FIREBASE = 'https://redux-dashboard.firebaseio.com/'

export const FirebaseConfig = {
  apiKey: 'AIzaSyB-v3QnJe_mxSH4y7boD8Q8G0KifCL3sOk',
  authDomain: 'presidential-io.firebaseapp.com',
  databaseURL: 'https://presidential-io.firebaseio.com',
  storageBucket: 'presidential-io.appspot.com',
  messagingSenderId: '1056110697081'
}

export const Initial = {
  sidebar: {
    github: 'https://github.com/RcKeller/'
  }
}

//    /////
//    THEME CREATION AND CONSTANTS
//    /////
export const styleAsTrue = true

import {fade} from 'material-ui/utils/colorManipulator'
import {
  red700, red800,
  blueA100, blueA200, blueA400,
  redA400, yellowA400, greenA400,
  greenA700, redA700, yellowA700, blueA700,
  grey400, grey300,
  blueGrey100,
  white, fullWhite, darkBlack, fullBlack
} from 'material-ui/styles/colors'

export const Accent = {
  r: redA700,
  y: yellowA700,
  g: greenA700,
  b: blueA700,
  w: fullWhite
}

export const elementHeight = 64

export const Normalize = {
  padding: 0,
  margin: 0
}

export const Theme = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: red800,
    primary2Color: red700,
    primary3Color: grey400,
    accent1Color: blueA200,
    accent2Color: blueA400,
    accent3Color: blueA100,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: red800,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  appBar: {
    position: 'fixed',
    top: 0,
    height: elementHeight
  },
  contact: {
    height: elementHeight
  },
  drawer: {
    width: 250,
    marginTop: elementHeight,
    backgroundColor: blueGrey100,
    paddingBottom: elementHeight
  },
  list: {
    overflowY: 'auto',
    paddingTop: 0
  },
  container: {
    padding: 16,
    paddingBottom: elementHeight
  },
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%'
  },
  card: {
    padding: 10,
    margin: 10,
    overflow: 'hidden',
    minHeight: 350
  },
  cardHeader: {
    height: 60,
    padding: 16,
    margin: 0
  },
  cardText: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0
  },
  normalText: {
    paddingBottom: 0,
    fontSize: 12
  },
  skillset: {
    padding: 10,
    margin: 10
  },
  skillTitle: {
    padding: 5,
    titleColor: fullWhite
  },
  slide: {
    padding: 16
  },
  circularProgress: {
    position: 'relative',
    top: 100,
    left: '50%',
    color: blueA400,
    zIndex: 1
  },
  iconColor: {
    resume: redA400,
    email: yellowA400,
    phone: greenA400
  }
}

export const githubIcon = {
  style: {
    width: 25,
    height: 25
  },
  source: 'https://firebasestorage.googleapis.com/v0/b/presidential-io.appspot.com/o/github.svg?alt=media&token=d4e4c82b-9f4f-4bb4-b7de-51ac6361eab8'
}
