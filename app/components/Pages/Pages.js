import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'
import {Card, CardTitle, CardHeader, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

import Timeline from '../Timeline/Timeline'

const ForeignPolicy = () => (
  <Row>
    <Col sm={12}>
      <Card style={C.Theme.card}>
        <CardTitle title='Build the Wall' subtitle='Blah blah just another brick in that wall' />
        <CardText>{nl2br('Details about the exec branchs stance.')}</CardText>
        <Col sm={12}>
          <Timeline />
        </Col>
        <CardTitle title='Public Response' />
        <Col sm={12} md={6}>
          <Card style={C.Theme.card}>
            <CardHeader title='Anti-wall stuff' subtitle='Location & Date' />
            <CardText>Links n stuff</CardText>
          </Card>
        </Col>

      </Card>
    </Col>
  </Row>
    )

export default ForeignPolicy
