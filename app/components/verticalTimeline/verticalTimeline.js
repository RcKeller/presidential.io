import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'

// import {CardTitle} from 'material-ui/Card'
// import Divider from 'material-ui/Divider'

// import Event from './Event/Event'

const VerticalTimeline = ({data}) => (
  <Col style={C.Normalize} sm={12}>
    <ul className='verticalTimeline'>

      <li className='verticalTimeline-item'>
        <div className='verticalTimeline-image red'>
          <span className='glyphicon glyphicon-th-large' aria-hidden='true' />
        </div>
        <div className='verticalTimeline-content'>
          <h3 className='title'>Lorem ipsum dolor sit amet</h3>
          <Row>
            <Col sm={3}>
              <img src='https://cretoniatimesdotcom.files.wordpress.com/2015/07/donald-trump-bad-hair-photo-1.jpg?w=640' alt='trump sucks' />
            </Col>
            <Col sm={9}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non nisl dapibus est gravida ornare. Nullam laoreet lacus pretium ante dignissim, eu luctus risus interdum.</p>
            </Col>
          </Row>
        </div>
      </li>

      <li className='verticalTimeline-item'>
        <div className='verticalTimeline-image yellow'>
          <span className='glyphicon glyphicon-tint' aria-hidden='true' />
        </div>
        <div className='verticalTimeline-content'>
          <h3 className='title'>Vestibulum sapien odio</h3>
          <p>Vestibulum sapien odio, interdum nec odio faucibus, tincidunt porttitor enim. Nunc blandit neque quis suscipit placerat.</p>
        </div>
      </li>
      <li className='verticalTimeline-item'>
        <div className='verticalTimeline-image green'>
          <span className='glyphicon glyphicon-ok' aria-hidden='true' />
        </div>
        <div className='verticalTimeline-content'>
          <h3 className='title'>Nam et lacus neque</h3>
          <p>Nam et lacus neque. Ut dictum massa arcu, non tristique neque laoreet at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla facilisi.</p>
        </div>
      </li>
    </ul>

  </Col>
)

export default VerticalTimeline
