import * as C from '../../constants'
import React from 'react'

import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card'
// import nl2br from 'react-newline-to-break'
import VerticalTimeline from '../verticalTimeline/verticalTimeline'

//  Temporary component for concept only. Self containing structure.
const text = 'The mission of this site is to provide an unbiased record of administrative action taken by the executive branch and the subsequent responses organized by the American public. We want to inform users about the facts of the Trump administration and empower those who may feel helpless.'

const Home = ({data}) => (
  <div>
    <Card style={C.Theme.card}>
      <CardMedia overlay={
        <CardTitle title='Welcome to Executive Action' subtitle='Track executive actions and their public response' />
      } >
        <img style={{maxHeight: 400}} src={C.frontImage} />
      </CardMedia>
      <CardText>{text}</CardText>
    </Card>

    <CardTitle title='Recent Developments' />
    <VerticalTimeline data={data} />
  </div>
    )

export default Home
