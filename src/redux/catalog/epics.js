/* eslint-disable import/prefer-default-export */
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  map,
  exhaustMap,
  retry,
  catchError,
} from 'rxjs/operators';

import { CATALOG_REQUEST } from './types';

import {
  catalogSuccess,
  catalogFailure,
} from './actions';

export const catalogRequestEpic = (action$) => action$.pipe(
  ofType(CATALOG_REQUEST),
  exhaustMap(() => ajax.getJSON(`${process.env.REACT_APP_BACKEND_URL}/items`).pipe(
    retry(5),
    map((o) => catalogSuccess(o)),
    catchError((e) => of(catalogFailure(e))),
  )),
);
