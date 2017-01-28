import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'
import VerticalTimeline from '../verticalTimeline/verticalTimeline'

//  Temporary component for concept only. Self containing structure.
const title = 'The tool to keep the executive branch in check'
const text = 'This is a React.JS project to create an "issue tracker" for the campaign promises of the Trump-Pence administration. This will track developments in presidential initiatives, as well as any counter-movements sprung from citizens and opposing parties. Thus, we create an information system that is more than just another "president tracker" to play up headlines - we create a tool for eliniminating the noise and mobilizing the public.\n\nAn ideal use case for this website would be to learn about trump and his initiatives, where our government stands, and what citizens can do in response. Existing issue trackers either cover one side of the story(trump but not pence, protests but not executive orders, etc) and are an incomplete information system. Let\'s close the loop.'

const Home = () => (
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
        <VerticalTimeline />
      </Col>
    </Row>
  </div>
)

export default Home
