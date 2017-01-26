import * as C from '../../constants'
import React from 'react'

//    /////
//    MATERIAL-UI COMPONENTS
//    ////
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const Sidebar = ({github = C.Initial.github}) =>
  <List style={C.Theme.list}>
    <div>
      sidebar
    </div>
    <Divider />
    <a target='_blank' href={github}>
      <ListItem style={C.Theme.link}
        leftIcon={<img src={C.githubIcon.source} alt='' style={C.githubIcon.style} />}
        primaryText='Github'
      />
    </a>
  </List>

export default Sidebar
