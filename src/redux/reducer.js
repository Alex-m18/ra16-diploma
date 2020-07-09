import { combineReducers } from 'redux';
import globalSettingsReducer from './globalSettings/reducer';
import categoryReducer from './categories/reducer';
import catalogReducer from './catalog/reducer';
import topSalesReducer from './topSales/reducer';
// import imagesReducer from './images/reducer';

const reducer = combineReducers({
  globalSettings: globalSettingsReducer,
  categories: categoryReducer,
  catalog: catalogReducer,
  topSales: topSalesReducer,
  // images: imagesReducer,
});

export default reducer;
