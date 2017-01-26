import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

//  Temporary component for concept only. Self containing structure.
const title = 'The tool to keep the executive branch in check'
const text = ''

const Spec = () => (
  <Col sm={12}>
    <Card style={C.Theme.card}>
      <CardTitle title={title} />
      <CardText>{nl2br(text)}</CardText>
    </Card>
  </Col>
)

export default Spec
