import { combineEpics } from 'redux-observable';
import { topSalesRequestEpic } from './topSales/epics';
import { catalogRequestEpic } from './catalog/epics';
// import { imagesRequestEpic } from './images/epics';

const epic = combineEpics(
  topSalesRequestEpic,
  catalogRequestEpic,
  // imagesRequestEpic,
);

export default epic;
