import { fetchProductList } from './../../store/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainReducerState } from './../../interfaces/index';
import { ProductList } from './ProductList';
import { ThunkDispatch } from 'redux-thunk';


const mapStateToProps = ( state: MainReducerState): Partial<MainReducerState> => ({...state})
const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any, any>) => ({
  fetchProductList: () => dispatch(fetchProductList())
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)