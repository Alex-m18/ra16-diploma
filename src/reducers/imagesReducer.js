import { 
  IMAGES_REQUEST,
  IMAGES_FAILURE,
  IMAGES_SUCCESS,
  IMAGES_SET_SHOW_INDEX,
} from '../actions/actionTypes';

const initialState = [];

export default function imagesReducer(state = initialState, action) {
  const { id } = action.payload || {};
  switch (action.type) {
    case IMAGES_REQUEST:
      return state.map((o) => {
        if (o.id === id) { o.loading = true; o.error = null; }
        return o;
      });
    case IMAGES_FAILURE:
      const { error } = action.payload;
      return state.map((o) => {
        if (o.id === id) { o.loading = false; o.error = error; }
        return o;
      });
    case IMAGES_SUCCESS:
      const { source } = action.payload;
      return state.map((o) => {
        if (o.id === id) { o.sources.push(source); o.loading = false; o.error = null; }
        return o;
      });
    case IMAGES_SET_SHOW_INDEX:
      const { index } = action.payload;
      return state.map((o) => {
        if (o.id === id) { o.showIndex = index; o.loading = false; o.error = null; }
        return o;
      });
    default:
      return state;
  }
}
