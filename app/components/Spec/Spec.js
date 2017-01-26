import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

//  Temporary component for concept only. Self containing structure.
const title = 'The tool to keep the executive branch in check'
const text = 'This is a React.JS project to create an "issue tracker" for the campaign promises of the Trump-Pence administration. We will track their progress towards their initiatives, as well as any counter-movements and protests against them. The new presidency threatens nearly all legislation from the past decade, ranging from healthcare reform to civil rights. Our new president has also taken a personal vendetta against women, muslims, immigrants and citizens of color. Amid all the noise, a need arises for a system that tracks both what is happening on the hill and what is going on in the streets, so that citizens can take action against this new administration.\n\nAn ideal use case for this website would be to learn about trump and his initiatives, where our government stands, and what citizens can do in response. Existing issue trackers either cover one side of the story(trump but not pence, protests but not executive orders, etc) and are an incomplete information system. Let\'s close the loop.'

const Spec = () => (
  <Col sm={12}>
    <Card style={C.Theme.card}>
      <CardTitle title={title} />
      <CardText>{nl2br(text)}</CardText>
    </Card>
  </Col>
)

export default Spec
