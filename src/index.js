import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import defaults from './apollo/defaults'
import resolvers from './apollo/resolvers'

import { ThemeProvider } from 'styled-components'
import { theme } from './components/shared/styled-semantic'

import { BrowserRouter as Router } from "react-router-dom"

import { AUTH_TOKEN } from './constants'

import App from './App'

// @ts-ignore
const client = new ApolloClient({
	uri: 'http://localhost:4000',
	// uri: 'https://now-advanced.now.sh',
	// uri: 'https://env-1542080.mircloud.ru',
	request: (operation) => {
		const token = localStorage.getItem(AUTH_TOKEN)
		operation.setContext({
			headers: {
				Authorization: token ? `Bearer ${token}` : '',
			}
		})
	},
	clientState: {
		defaults,
		resolvers
	}
})

const token = localStorage.getItem(AUTH_TOKEN)

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App
          token={token}
          client={client}
        />
      </ApolloProvider>
    </ThemeProvider>
  </Router>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
