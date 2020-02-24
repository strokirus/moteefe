import { fork } from 'redux-saga/effects';
import mainSaga from './containers/Main/sagas';

const sagas = [
  mainSaga,
];

/**
 * Describe all sagas used in project
 */
export default function* root() {
  yield sagas.map(saga => fork(saga));
}
