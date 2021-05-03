import { fetchProductList, setMainState } from './../../store/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { MainReducerState } from './../../interfaces/index';
import ProductList  from './ProductList';
import { ThunkDispatch } from 'redux-thunk';
import * as mainActions from '../../store/actions'

const mapStateToProps = ( state: MainReducerState): Partial<MainReducerState> => {
  const { products, sortBy } = state;
  return {
    ...state,
    products: products.sort((a, b) => sortBy === "LOW" ? +a.price - +b.price : +b.price - +a.price)
  }
}

// const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any, any>) => ({
//   fetchProductList: () => dispatch(fetchProductList()),
//   setMainState: (payload: Partial<MainReducerState>) => dispatch(setMainState(payload)),
// })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList as any)