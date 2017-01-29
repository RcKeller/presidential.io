import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'

import {CardTitle} from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import Event from './Event/Event'

const Timeline = ({data}) => (
  <Col style={C.Normalize} sm={12}>
    <ul className='timeline'>
      <CardTitle title='Recent Developments'
        style={{paddingBottom: 24}}
      />
      <Divider />
      {data.map((position, i) => (
        <Event key={i} {...position} />
      ))}
    </ul>
  </Col>
)

export default Timeline
