import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  requestProducts,
} from './api';

import C from './constants';

/**
 * Trigged when Networks Request is demmanded
*/
function* fetchProducts() {
  try {
    const response = yield call(requestProducts);

    if (response) {
      yield put({ type: C.FETCH_PRODUCTS_SUCCESS,
        data: response,
      });
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put({ type: C.FETCH_PRODUCTS_FAILURE, error: error.response.status });
  }
}

function* getMainData() {
  yield takeLatest(C.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

export default getMainData;
