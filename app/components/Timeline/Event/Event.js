import * as C from '../../../constants'
import React from 'react'

import {CardHeader, CardText} from 'material-ui/Card'

//    /////
//    COMPONENT
//    /////
const Event = ({title, subtitle, link, description, date}) => (
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
)

export default Event
