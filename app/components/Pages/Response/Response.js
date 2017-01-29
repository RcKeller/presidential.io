import * as C from '../../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

const PublicResponse = ({data}) => (
  <div>
    {data.map((movement, i) => (
      <Col key={i} sm={12} md={6}>
        <Card style={C.Theme.card}>
          <CardMedia
            overlay={<CardTitle title={movement.title} subtitle={movement.subtitle} />}
          >
            <img src={movement.image ? movement.image : C.defaultImage} />
          </CardMedia>
          {movement.description && <CardText>{movement.description}</CardText>}
        </Card>
      </Col>
    ))}
  </div>
)
//  {data.counterMovements.map((issue, i) => (
export default PublicResponse
