import produce from 'immer'
import { ActionConstants } from './action-constants'
import { ActionType, IUserData } from './action-types'

interface InitalStateInterface {
  authLoading: boolean
  token: null | string
  isAuthenticated: boolean
  error: any,
  user: IUserData
}

const initalState = {
  authLoading: false,
  token: null,
  isAuthenticated: false,
  error: null,
  user: {}
}

export const authReducer = (
  state: InitalStateInterface = initalState,
  action: ActionType
): InitalStateInterface => {
  return produce(state, (auth) => {
    switch (action.type) {
      case ActionConstants.AUTH_INIT:
        auth.authLoading = true
        auth.token = null
        auth.isAuthenticated = false
        auth.error = null
        return auth
      case ActionConstants.AUTH_SUCCESS:
        auth.authLoading = false
        auth.token = action.payload
        auth.isAuthenticated = action.payload !== null 
        auth.error = null
        return auth
      case ActionConstants.AUTH_FAILED:
        auth.authLoading = false
        auth.token = null
        auth.isAuthenticated = false
        auth.error = action.payload
        return auth
        case ActionConstants.USER_INIT:
          auth.authLoading = true
        return auth
        case ActionConstants.USER_SUCCESS:
          auth.authLoading = false
          auth.user = action.payload
        return auth
        case ActionConstants.MODIFY_PLAN:
          auth.user.plan_id = action.payload.plan_id
          return auth
      default:
        return auth
    }
  })
}
