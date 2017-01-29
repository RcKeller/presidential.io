import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardTitle, CardMedia, CardText} from 'material-ui/Card'
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
    {routeMap.hasOwnProperty(route.path) &&
      data.categories[routeMap[route.path]].map((issue, i) => (
        <Card key={i} style={C.Theme.card}>
          <div style={{display: 'inline'}}>
            <CardMedia style={{display: 'inline-block', height: 100, overflowY: 'hidden'}} overlay={
              <CardTitle style={{height: 100}} title={issue.title} subtitle={issue.subtitle} />
            } >
              <img style={{height: 100}} src={C.headerImage} />
            </CardMedia>
          </div>
          {issue.description && <CardText>{nl2br(issue.description)}</CardText>}
          <Col sm={12}>
            <Timeline data={issue.movement} />
          </Col>
          <CardTitle title='Public Response' />
          <PublicResponse data={issue.counter} />
        </Card>
      ))}
  </div>
)
export default Pages
