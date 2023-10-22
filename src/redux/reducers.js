import { combineReducers } from 'redux';
import AuthReducer from './features/auth/reducer';

const rootReducer = combineReducers({
    authState: AuthReducer,

});

export default rootReducer;