import { 
  CHANGE_GLOBAL_SETTINGS,
  CATEGORY_CHANGE_SELECTION,
  CATALOG_ITEMS_RECIEVED_COUNT,
  TOP_SALES_REQUEST,
  TOP_SALES_FAILURE,
  TOP_SALES_SUCCESS,
  CATALOG_REQUEST,
  CATALOG_FAILURE,
  CATALOG_SUCCESS,
  IMAGES_REQUEST,
  IMAGES_FAILURE,
  IMAGES_SUCCESS,
  IMAGES_SET_SHOW_INDEX,
} from './actionTypes';

export function changeGlobalSetting(settings = {}) {
  return { type: CHANGE_GLOBAL_SETTINGS, payload: settings };
}

export function categoryChangeSelection({ id, selected }) {
  return { type: CATEGORY_CHANGE_SELECTION, payload: { id, selected } };
}

export function topSalesRequest() {
  return { type: TOP_SALES_REQUEST };
}

export function topSalesFailure(value = true) {
  return { type: TOP_SALES_FAILURE, payload: value };
}

export function topSalesSuccess(value = true) {
  return { type: TOP_SALES_SUCCESS, payload: value };
}

export function catalogItemsRecievedCount(count) {
  return { type: CATALOG_ITEMS_RECIEVED_COUNT, payload: count };
}

export function catalogRequest() {
  return { type: CATALOG_REQUEST };
}

export function catalogFailure(value = true) {
  return { type: CATALOG_FAILURE, payload: value };
}

export function catalogSuccess(value = true) {
  return { type: CATALOG_SUCCESS, payload: value };
}

export function imagesRequest({ id, sources }) {
  return { type: IMAGES_REQUEST, payload: { id, sources } };
}

export function imagesFailure({ id, error }) {
  return { type: IMAGES_FAILURE, payload: { id, error } };
}

export function imagesSuccess({ id, source }) {
  return { type: IMAGES_SUCCESS, payload: { id, source } };
}

export function imagesSetShowIndex({ id, index }) {
  return { type: IMAGES_SET_SHOW_INDEX, payload: { id, index } };
}
