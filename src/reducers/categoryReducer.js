import { CATEGORY_CHANGE_SELECTION } from '../actions/actionTypes';

const initialState = [
    { id: 12, title: 'Мужская обувь', selected: true },
    { id: 13, title: 'Женская обувь', selected: true },
    { id: 14, title: 'Обувь унисекс', selected: true },
    { id: 15, title: 'Детская обувь', selected: true },
];

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_CHANGE_SELECTION:
      const { id, selected } = action.payload;
      const newState = state.map((o) => {
        if (o.id === id) o.selected = selected;
        return o;
      });
      return newState;
    default:
      return state;
  }
}
