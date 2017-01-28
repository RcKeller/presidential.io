import * as C from '../../constants'
import React from 'react'

import {Col} from 'react-grid-system'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import nl2br from 'react-newline-to-break'

import Timeline from '../Timeline/Timeline'
import Response from './Response/Response'

const ForeignPolicy = ({data}) => (
  <div>
    {data.foreignPolicy.map((issue, i) => (
      <Col key={i} sm={12}>
        <Card style={C.Theme.card}>
          <CardTitle title={issue.title} subtitle={issue.subtitle} />
          <CardText>{nl2br(issue.description)}</CardText>
          <Col sm={12}>
            <Timeline {...issue.movement} />
          </Col>
          <CardTitle title='Public Response' />
          <Response data={issue} />
        </Card>
      </Col>
    ))}
  </div>
)
//  <Response {...issue.counterMovements} />
export default ForeignPolicy
