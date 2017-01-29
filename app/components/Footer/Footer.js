import * as C from '../../constants'

import React from 'react'

import Paper from 'material-ui/Paper'

import {CardHeader} from 'material-ui/Card'

const Footer = () => (
  <Paper style={C.Theme.footer}>
    <CardHeader style={C.Normalize}
      title='© Keller, Rosemary, Jessica, Benjamin & McKaulay'
      subtitle='UW iSchool - WINFO Hackathon - 2017'
      avatar='https://firebasestorage.googleapis.com/v0/b/presidential-io.appspot.com/o/nontransparenticon.png?alt=media&token=b45573fb-d495-477a-b95e-b83c22f698e0'
    />
  </Paper>
)

export default Footer
