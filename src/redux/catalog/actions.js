import {
  CATALOG_ITEMS_RECIEVED_COUNT,
  CATALOG_REQUEST,
  CATALOG_FAILURE,
  CATALOG_SUCCESS,
} from './types';

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
