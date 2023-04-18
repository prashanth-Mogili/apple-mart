// import {createStore} from "redux";
// import rootReducers from "./reducers";

import { createStoreHook } from "react-redux";
import rootReducers from './reducers';

const store = createStoreHook(rootReducers);

export default store;