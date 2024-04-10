import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { RootState } from '../store'
import { auth } from '../store/allActions'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(Object.assign({}, auth), dispatch)
}
