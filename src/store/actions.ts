import Api from '../utils/api'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { MainReducerState, Action } from './../interfaces/index';


export const setMainState = (payload: Partial<MainReducerState>): Action => ({
  type: "SET_MAIN_STATE",
  payload
})

export const fetchProductList = () => async (
  dispatch: ThunkDispatch<MainReducerState, any, Action>,
  getState: () => MainReducerState
  ): Promise<void> => {
    try {
      const { searchString } = getState()
      dispatch(setMainState({loading: true}))

      const res = await Api.get(`/products?title_like=${searchString}`)

      dispatch(setMainState({
        products: res.data
      }))

    } catch (error) {
      console.error(error);

    } finally {
      dispatch(setMainState({loading: false}))
    }
  }