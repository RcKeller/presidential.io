import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

import Timeline from '../Timeline/Timeline'
import PublicResponse from './Response/Response'

const routeMap = {
  //  route: firebasePath
  'foreign-policy': 'foreignPolicy',
  'environment': 'environment',
  'education': 'education',
  'economics': 'economics',
  'social-welfare': 'socialWelfare'
}

const Pages = ({data, route}) => (
  <div>
    {route &&
      data[routeMap[route.path]].map((issue, i) => (
        <Col key={i} sm={12}>
          <Card style={C.Theme.card}>
            <CardTitle title={issue.title} subtitle={issue.subtitle} />
            {issue.description && <CardText>{nl2br(issue.description)}</CardText>}
            <Col sm={12}>
              <Timeline data={issue.movement} />
            </Col>
            <CardTitle title='Public Response' />
            <PublicResponse data={issue.counter} />
          </Card>
        </Col>
      ))
    }
  </div>
)
//  WHAT YOU SEE BELOW IS POOR PRACTICE.
//  Doing this for the sake of time.

export default Pages
