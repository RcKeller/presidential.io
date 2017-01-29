import * as C from '../../../constants'
import React from 'react'

import {CardHeader, CardText} from 'material-ui/Card'
// import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider'

//    /////
//    COMPONENT
//    /////
const Event = ({title, subtitle, link, description, date}) => (
  <a href={link}>
    <li
      className='event'
      data-date={date}
    >

      <CardHeader
        title={title}
        subtitle={subtitle}
        style={C.Normalize}
      />
      <CardText style={C.Theme.cardText}>
        {description}
      </CardText>
    </li>
    <Divider />
  </a>
)

export default Event
