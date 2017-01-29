import * as C from '../../constants'
import React from 'react'

import {Row, Col} from 'react-grid-system'

// import {CardTitle} from 'material-ui/Card'
// import Divider from 'material-ui/Divider'

import Language from 'material-ui/svg-icons/action/language'
import Landscape from 'material-ui/svg-icons/image/landscape'
import School from 'material-ui/svg-icons/social/school'
import TrendingUp from 'material-ui/svg-icons/action/trending-up'
import People from 'material-ui/svg-icons/social/people'

//let test = true

//let x = test ? true : false

const VerticalTimeline = ({data}) => (
  <Col style={C.Normalize} sm={12}>

    <ul className='verticalTimeline'>
      {data.headlines && data.headlines.map((line, i) => (

        <li key={i} className='verticalTimeline-item'>
          <a href={line.link}>
         
            <div className='verticalTimeline-image blue'>
              <div className='verticalTimeline-badge'>

                { (line.category == "Foreign Policy") && <Language color="white"/>}
                { (line.category == "Environment") && <Landscape color="white"/>}
                { (line.category == "Education") && <School color="white"/>}
                { (line.category == "Economics") && <TrendingUp color="white"/>}
                { (line.category == "Social Welfare") && <People color="white"/>}
                
              </div>
             
            </div>
            <div className='verticalTimeline-content'>
              <h3 className='title' key={i}>{line.title}</h3>
              <Row>
                <Col sm={3}>
                  <img key={i} src={line.image} alt='timeline photo' />
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
