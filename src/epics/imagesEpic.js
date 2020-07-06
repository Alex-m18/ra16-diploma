import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, retry, catchError } from 'rxjs/operators';
import { IMAGES_REQUEST } from '../actions/actionTypes';
import {
  imagesSuccess,
  imagesFailure,
} from '../actions';

export const imagesRequestEpic = action$ => action$.pipe(
  ofType(IMAGES_REQUEST),
  map(o => o.payload),
  mergeMap(({ id, sources }) => from(sources).pipe(
    mergeMap(url => ajax({
      url,
      method: 'GET',
      responseType: 'arraybuffer',
      crossDomain: true,
      withCredentials: false,
    }).pipe(
      retry(5),
      map(o => imagesSuccess({ id, source: URL.createObjectURL(o)})),
      catchError(error => of(imagesFailure({ id, error })))
    ))
  )),
);
