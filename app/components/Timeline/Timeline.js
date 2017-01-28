import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'

import {CardTitle} from 'material-ui/Card'
import Divider from 'material-ui/Divider'

import Position from './Event/Event'

let test = [{
  title: 'title',
  name: 'subline',
  dates: 'Date',
  bullets: ['Bullet A', 'Bullet B']
},
  {
    title: 'title',
    name: 'subline',
    dates: 'Date',
    bullets: ['Bullet A', 'Bullet B']
  }
]

const Timeline = ({data = test}) => (
  <Col style={C.Normalize} sm={12}>
    <ul className='timeline'>
      <CardTitle title='Professional Experience'
        style={{paddingBottom: 24}}
      />
      <Divider />
      {data.map((position, i) => (
        <Position key={i} {...position} />
      ))}
      <Divider />
    </ul>
  </Col>
)

export default Timeline
