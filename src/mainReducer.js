import { combineReducers } from 'redux';
import main from './containers/Main/reducers';

const mainReducer = combineReducers({
  main,
});

/**
 * Describe all reducers used in project
 */
export default mainReducer;
