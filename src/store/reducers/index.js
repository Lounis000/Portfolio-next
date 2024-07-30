import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres réducteurs ici
});

export default rootReducer;
