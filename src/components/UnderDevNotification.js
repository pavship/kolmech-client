import React from 'react'

import styled from 'styled-components'
import { Segment as SSegment } from 'semantic-ui-react'

import CenteredContainer from './shared/CenteredContainer'

const Segment = styled(SSegment)`
  margin-top: 1rem !important;
`

export default () => {
  return (
    <CenteredContainer>
      <Segment
        secondary
      >
        <p><b>Личный кабинет клиента</b> находится в разработке</p>
        <p><a href='http://www.honingovanie.ru'>Вернуться на сайт</a></p>
      </Segment>
    </CenteredContainer>
  )
}
