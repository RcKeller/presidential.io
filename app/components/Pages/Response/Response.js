import * as C from '../../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const PublicResponse = ({data}) => (
  <div>
    {data.map((movement, i) => (
      <Col key={i} sm={12} md={6}>
        <Card style={C.Theme.card}>
          <CardHeader title={movement.title} subtitle={movement.subtitle} />
          <CardText>{movement.description}</CardText>
        </Card>
      </Col>
    ))}
  </div>
)
//  {data.counterMovements.map((issue, i) => (
export default PublicResponse
