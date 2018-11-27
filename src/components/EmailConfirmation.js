import React from 'react'

import { Query } from 'react-apollo'
import { confirmEmail } from '../graphql/user'

import styled from 'styled-components'
import { Message, Icon } from 'semantic-ui-react'

import CenteredContainer from './shared/CenteredContainer'


const SMessage = styled(Message)`
  margin-top: 1rem !important;
`

export default ({
  token
}) => {
  return (
    <CenteredContainer>
      <Query
        query={confirmEmail}
        variables={{token}}
      >
        {({ loading, error, data }) => <>
            { loading && 
              <SMessage
                icon
              >
                <Icon name='circle notched' loading />
                <Message.Content>
                  <Message.Header>Подождите</Message.Header>
                  Мы подтверждаем Ваш email
                </Message.Content>
              </SMessage>
            }
            { error &&
              <SMessage
                error
                header='Ошибка при подтверждении Email'
                content={error.message}
              />
            }
            { data && data.confirmEmail &&
              <SMessage
                icon
                success
              >
                <Icon name='checkmark' />
                <Message.Content>
                  <Message.Header>{data.confirmEmail.email}</Message.Header>
                  Email успешно подтвержден!
                </Message.Content>
              </SMessage>
            }
          </>
        }
      </Query>
    </CenteredContainer>
  )
}
