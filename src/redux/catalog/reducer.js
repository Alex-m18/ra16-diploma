import {
  // CATALOG_ITEMS_RECIEVED_COUNT,
  CATALOG_REQUEST,
  CATALOG_FAILURE,
  CATALOG_SUCCESS,
} from './types';

const initialState = {
  loading: false,
  error: null,
  recieveOffset: process.env.CATALOG_RECIEVE_OFFSET,
  recievedCount: process.env.CATALOG_RECIEVE_OFFSET,
  items: [],
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case CATALOG_REQUEST:
      return { ...state, loading: true, error: null };
    case CATALOG_FAILURE: {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    }
    case CATALOG_SUCCESS: {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
}
