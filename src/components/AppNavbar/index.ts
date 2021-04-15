import { AppNavbar } from './AppNavbar';
import { setMainState } from './../../store/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainReducerState, Action } from './../../interfaces/index';
import { ThunkDispatch } from 'redux-thunk';


const mapStateToProps = ( state: MainReducerState): Partial<MainReducerState> => ({...state})
const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<any, any, Action>) => ({
  setMainState: (payload: any) => dispatch(setMainState(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar)