import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import globalSettingsReducer from '../reducers/globalSettingsReducer';
import categoryReducer from '../reducers/categoryReducer';
import catalogReducer from '../reducers/catalogReducer';
import topSalesReducer from '../reducers/topSalesReducer';
import imagesReducer from "../reducers/imagesReducer";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { topSalesRequestEpic } from '../epics/topSalesEpic';
import { catalogRequestEpic } from '../epics/catalogEpic';
import { imagesRequestEpic } from '../epics/imagesEpic';

const reducer = combineReducers({
  globalSettings: globalSettingsReducer,
  categories: categoryReducer,
  catalog: catalogReducer,
  topSales: topSalesReducer,
  images: imagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  topSalesRequestEpic,
  catalogRequestEpic,
  imagesRequestEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epic);

export default store;
