import React from 'react'
import { Link } from 'react-router-dom'

const fakeAuthCentralState = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true
    setTimeout(callback, 300)
  },
  signout(callback) {
    this.isAuthenticated = false
    setTimeout(callback, 300)
  },
}

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redirectToReferrer: false,
    }
  }

  login = () => {
    fakeAuthCentralState.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }))
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      this.props.history.push(from.pathname)
    }

    return (
      <>
        <p>Please, you need to be authenticated to to view this content</p>
        <Link to="/LoginPage">Login</Link>
      </>
    )
  }
}

export default Login
