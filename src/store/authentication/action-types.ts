import { ActionConstants } from './action-constants'

interface AuthInitAction {
  type: ActionConstants.AUTH_INIT
}
interface AuthSuccessAction {
  type: ActionConstants.AUTH_SUCCESS
  payload: string | null
}

interface AuthFailed {
  type: ActionConstants.AUTH_FAILED
  payload: any
}

interface UserInitAction {
  type: ActionConstants.USER_INIT
}
interface UserSuccessAction {
  type: ActionConstants.USER_SUCCESS
  payload: IUserData
}

interface UserFailed {
  type: ActionConstants.USER_FAILED
  payload: any
}

interface UserModifyPlan {
  type: ActionConstants.MODIFY_PLAN
  payload: IUserPlanModify
}


export interface IUserData {
  plan_id ?: number,
  firstName? : string
  lastName? : string
  email? : string
  username? : string
  file?: File
  country?: string
}

export interface IUserPlanModify {
  plan_id : number,
}

export type ActionType = AuthInitAction | AuthSuccessAction | AuthFailed | UserInitAction | UserSuccessAction | UserFailed | UserModifyPlan