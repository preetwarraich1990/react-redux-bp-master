import { ActionConstants } from './action-constants'
import { ActionType, IUserData } from './action-types'
import service from '../../services/service'
import { apiURI } from '../../services/api-endpoints'
import { Dispatch } from 'redux'
import { toastr } from 'react-redux-toastr'

/**
 *
 * @param data
 */
export const loginUser = (data: any) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionConstants.AUTH_INIT,
    })

        dispatch({
          type: ActionConstants.AUTH_SUCCESS,
          payload: 'sdkfjkls2l3kh2hl2kj32lk3jlk2j3k2j3',
        })
    return service
      .post(apiURI.auth.login, data)
      .then((resp) => {
        dispatch({
          type: ActionConstants.AUTH_SUCCESS,
          payload: 'sdkfjkls2l3kh2hl2kj32lk3jlk2j3k2j3',
        })
        toastr.success('Success!', 'Redirecting...')
        return resp
      })
      .catch((e) => {

        dispatch({
          type: ActionConstants.AUTH_SUCCESS,
          payload: 'sdkfjkls2l3kh2hl2kj32lk3jlk2j3k2j3',
        })
        toastr.error('Error', `Something went wrong, Please try again.`)
        return e
      })
  }
}

export const getUser = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionConstants.USER_INIT,
    })
    const data = {
      'plan_id' : 1,
      'firstName' : 'Pardip',
      'lastName' : 'Bhatti',
      'email' : 'pardip1@gmail.com',
      'username' : 'Pardip'
    }
    dispatch({
      type: ActionConstants.USER_SUCCESS,
      payload: data,
    })
    /*return service
      .post(apiURI.user, data)
      .then((resp) => {
        dispatch({
          type: ActionConstants.USER_SUCCESS,
          payload: 'sdkfjkls2l3kh2hl2kj32lk3jlk2j3k2j3',
        })
        toastr.success('Success!', 'Redirecting...')
        return resp
      })
      .catch((e) => {
        dispatch({
          type: ActionConstants.USER_FAILED,
          payload: e,
        })
        toastr.error('Error', `Something went wrong, Please try again.`)
        return e
      })*/
  }
}

export const userSelectedPlan = (data:any) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionConstants.MODIFY_PLAN,
      payload: data,
    })
  }
  
}

export const updateUser = (data:IUserData) => {
  
}

export const logout = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: ActionConstants.AUTH_SUCCESS,
      payload: null,
    })
  }
}
