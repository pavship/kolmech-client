import React from 'react'
import { Div } from './styled-semantic.js'

const CenteredContainer = ({p, children, ...props}) => {
  return (
    <Div
      {...props}
    >
      <Div
        mw='700px'
        m='0 auto'
        p={p}
        pl='.25rem'
        pr='.25rem'
      >
        {children}
      </Div>
    </Div>
  )
}

export default CenteredContainer
