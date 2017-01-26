import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'

import nl2br from 'react-newline-to-break'

import {Card, CardTitle, CardText} from 'material-ui/Card'

const Overview = ({title, objective}) => (
  <Col sm={12} lg={6}>
    <Card style={C.Theme.card}>
      <CardTitle title={title} />
      <CardText>{nl2br(objective)}</CardText>
    </Card>
  </Col>
)

export default Overview
