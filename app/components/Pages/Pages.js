import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

const ForeignPolicy = () => (
  <Row>
    <Col sm={12}>
      <Card style={C.Theme.card}>
        <CardTitle title='Foreign Policy' />
        <CardText>{nl2br('Blah blah just another brick in that wall')}</CardText>
      </Card>
    </Col>
  </Row>
)

export default ForeignPolicy
