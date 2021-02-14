import { takeLatest } from "redux-saga/effects";
import { registerSaga, loginSaga, tokenVerifySaga } from "./authenticationSaga";
import { getProductSaga } from "./productSaga";

import * as types from "../actions";

export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.VERIFY_TOKEN, tokenVerifySaga);
  yield takeLatest(types.GET_PRODUCT, getProductSaga);
}
