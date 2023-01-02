import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import thunk from "redux-thunk";
  import { questionReducer } from "./app/reducer";
  import { authReducer } from "./auth/reducer";
  import { adminReducer } from "./admin/reducer";
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  
  const rootReducer = combineReducers({
    questionReducer,
    authReducer,
    adminReducer,
  });
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );