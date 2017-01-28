import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'
import VerticalTimeline from '../verticalTimeline/verticalTimeline'


//  Temporary component for concept only. Self containing structure.
const title = 'Welcome to Executive Branch Tracker'
const text = 'The mission of this site is to provide an unbiased record of administrative action taken by the executive branch and the subsequent responses organized by the American public. We want to inform users about the facts of the Trump administration and empower those who may feel helpless.'

const Home = ({data}) => (
  <div>
    <Row>
      <Col sm={12}>
        <Card style={C.Theme.card}>
          <CardTitle title={title} />
          <CardText>{nl2br(text)}</CardText>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm={12}>
        <VerticalTimeline data={data} />

      </Col>
    </Row>
  </div>
)

export default Home
