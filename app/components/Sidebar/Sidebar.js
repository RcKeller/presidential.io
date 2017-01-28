import * as C from '../../constants'
import React from 'react'
import {Link} from 'react-router'

//    /////
//    MATERIAL-UI COMPONENTS
//    ////
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

import Home from 'material-ui/svg-icons/action/home'
import Language from 'material-ui/svg-icons/action/language'
import Landscape from 'material-ui/svg-icons/image/landscape'
import School from 'material-ui/svg-icons/social/school'
import TrendingUp from 'material-ui/svg-icons/action/trending-up'
import People from 'material-ui/svg-icons/social/people'

const Sidebar = ({github = C.Initial.github}) =>
  <List>
    <Link to='/' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Home' leftIcon={<Home />} />
    </Link>
    <Divider />
    <Link to='/foreign-policy' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Foreign Policy' leftIcon={<Language />} />
    </Link>
    <Link to='/environment' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Environment' leftIcon={<Landscape />} />
    </Link>
    <Link to='/education' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Education' leftIcon={<School />} />
    </Link>
    <Link to='/economics' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Economics' leftIcon={<TrendingUp />} />
    </Link>
    <Link to='/social-welfare' style={{textDecoration: 'none'}}>
      <ListItem primaryText='Social Welfare' leftIcon={<People />} />
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
