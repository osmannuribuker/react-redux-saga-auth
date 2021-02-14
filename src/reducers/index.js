import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import products from "./productReducers";
import verifyToken from "./verifyTokenReducer";

const rootReducer = combineReducers({
  register,
  login,
  products,
  verifyToken,
});

export default rootReducer;
