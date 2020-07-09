/* eslint-disable import/prefer-default-export */
import {
  CATEGORY_CHANGE_SELECTION,
} from './types';

export function categoryChangeSelection({ id, selected }) {
  return { type: CATEGORY_CHANGE_SELECTION, payload: { id, selected } };
}
