    
import { createReducer, createActions } from 'reduxsauce';


/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getData: [],
  onSucess :['dashBoardData'],
  

});

export const UserTypes = Types;

export default Creators;

/* ------------- Initial State ------------- */

const INITIAL_STATE = {
 
};

/* ------------- Reducers ------------- */

const getData = (state = INITIAL_STATE) => {
return { ...state };
};

const onSucess = (state = INITIAL_STATE , {dashBoardData}) => {
  return {...state , dashBoardData }
}



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.GET_DATA]: getData ,
  [UserTypes.ON_SUCESS]:onSucess,
  
});