import * as C from '../../constants'
import React from 'react'
import {Link} from 'react-router'

//    /////
//    MATERIAL-UI COMPONENTS
//    ////
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

import Language from 'material-ui/svg-icons/action/language'

const Sidebar = ({github = C.Initial.github}) =>
  <List>
    <Link to='/' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Home' leftIcon={<Language />} />
    </Link>
    <Link to='/foreign-policy' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Foreign Policy' leftIcon={<Language />} />
    </Link>
    <Divider />
    <a target='_blank' href={github}>
      <ListItem
        leftIcon={<img src={C.githubIcon.source} alt='' style={C.githubIcon.style} />}
        primaryText='Github'
      />
    </a>
  </List>

export default Sidebar
