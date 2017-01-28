import * as C from '../../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const Response = ({data}) => (
  <div>
    {data.map((issue, i) => (
      <Col key={i} sm={12} md={6}>
        <Card style={C.Theme.card}>
          <CardHeader title='Anti-wall stuff' subtitle='Location & Date' />
          <CardText>Links n stuff</CardText>
        </Card>
      </Col>
    ))}
  </div>
)
//  {data.counterMovements.map((issue, i) => (
export default Response
