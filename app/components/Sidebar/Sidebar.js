import * as C from '../../constants'
import React from 'react'

//    /////
//    MATERIAL-UI COMPONENTS
//    ////
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'

const Sidebar = ({github = C.Initial.github}) =>
  <List style={C.Theme.list}>
    <ListItem primaryText='Inbox' leftIcon={<ContentInbox />} />
    <ListItem primaryText='Starred' leftIcon={<ActionGrade />} />
    <ListItem primaryText='Sent mail' leftIcon={<ContentSend />} />
    <ListItem primaryText='Drafts' leftIcon={<ContentDrafts />} />
    <Divider />
    <a target='_blank' href={github}>
      <ListItem style={C.Theme.link}
        leftIcon={<img src={C.githubIcon.source} alt='' style={C.githubIcon.style} />}
        primaryText='Github'
      />
    </a>
  </List>

export default Sidebar
