import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

import Timeline from '../Timeline/Timeline'
import PublicResponse from './Response/Response'

const ForeignPolicy = ({data}) => (
  <div>
    {data.foreignPolicy.map((issue, i) => (
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
    ))}
  </div>
)
//  WHAT YOU SEE BELOW IS POOR PRACTICE.
//  Doing this for the sake of time.

const Environment = () => (<div>Empty for now.</div>)
const Education = () => (<div>Empty for now.</div>)
const Economics = () => (<div>Empty for now.</div>)
const SocialWelfare = () => (<div>Empty for now.</div>)

export {ForeignPolicy, Environment, Education, Economics, SocialWelfare}
