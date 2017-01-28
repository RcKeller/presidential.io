import * as C from '../../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const Response = ({counterMovements}) => (
  <div>
    {counterMovements.map((issue, i) => (
      <Col keu={i} sm={12} md={6}>
        <Card style={C.Theme.card}>
          <CardHeader title='Anti-wall stuff' subtitle='Location & Date' />
          <CardText>Links n stuff</CardText>
        </Card>
      </Col>
    ))}
  </div>
)

export default Response
