import { SET_LOGGED_IN_USER, CLEAR_LOGGED_IN_USER } from '../actions'

const emptyUser = {
  auth0Id: '',
  email: '',
  token: '',
}

export default function loggedInUserReducer(state = emptyUser, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LOGGED_IN_USER:
      return payload
    case CLEAR_LOGGED_IN_USER:
      //shouldn't this return the emptyUser instead?
      return state
    default:
      return state
  }
}
