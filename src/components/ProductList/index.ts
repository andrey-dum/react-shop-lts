import { fetchProductList, setMainState } from './../../store/actions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { MainReducerState } from './../../interfaces/index';
import { ProductList } from './ProductList';
import { ThunkDispatch } from 'redux-thunk';
import * as mainActions from '../../store/actions'

const mapStateToProps = ( state: MainReducerState): Partial<MainReducerState> => ({...state})

// const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any, any>) => ({
//   fetchProductList: () => dispatch(fetchProductList()),
//   setMainState: (payload: any) => dispatch(setMainState(payload)),
// })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(mainActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList as any)