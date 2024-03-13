// rootReducer.js
import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import portFolioReducer from "./portFolioReducer";
import productReducer from "./productReducer";
import teamReducer from "./teamReducer";
const rootReducer = combineReducers({
  products: productReducer,
  portFolio: portFolioReducer,
  blog: blogReducer,
  team: teamReducer,
});

export default rootReducer;
