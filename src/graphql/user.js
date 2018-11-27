import gql from 'graphql-tag'

export const confirmEmail = gql`
	query ConfirmEmail($token: String!) {
		confirmEmail(token: $token) {
			email
		}
	}
`