import  {CHANGE_SEARCH_FIELD} from './Constants.js';

const initialState = {
	searchField: ''
}
// this is the reducer function
export const searchMembers = (state=initialState,action={}) =>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, {searchField: action.payload})
		default:
		   return state;
	}
}