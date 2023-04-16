import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'shared/interfaces/redux'
import { AppDispatch } from '../../redux/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
