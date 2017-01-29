import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'

// import {CardTitle} from 'material-ui/Card'
// import Divider from 'material-ui/Divider'

// import Event from './Event/Event'

const VerticalTimeline = ({data}) => (
  <Col style={C.Normalize} sm={12}>

    <ul className='verticalTimeline'>
      {data.headlines && data.headlines.map((line, i) => (

        <li key={i} className='verticalTimeline-item'>
          <a href={line.link}>
            <div className='verticalTimeline-image blue'>
              <span className='glyphicon glyphicon-th-large' aria-hidden='true' />
            </div>
            <div className='verticalTimeline-content'>
              <h3 className='title' key={i}>{line.title}</h3>
              <Row>
                <Col sm={3}>
                  <img key={i} src={line.image} alt='trump sucks' />
                </Col>
                <Col sm={9}>
                  <p key={i}>{line.description}</p>
                </Col>
              </Row>
            </div>
          </a>
        </li>

      ))}
    </ul>

  </Col>
)

export default VerticalTimeline
