import * as C from '../../../constants'
import React from 'react'

import {CardHeader, CardText} from 'material-ui/Card'

//    /////
//    COMPONENT
//    /////

const Event = ({name = '', title, dates, description = '', bullets = []}) => (
  <li
    className='event'
    data-date={dates}
  >
    <CardHeader
      title={title}
      subtitle={name}
    />
    <CardText style={C.Theme.cardText}>
      {description}
      {bullets &&
        <ul style={{paddingLeft: 15}}>
          {bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      }
    </CardText>
  </li>
)

export default Event
