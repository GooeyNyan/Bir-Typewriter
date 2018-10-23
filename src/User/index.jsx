import React from 'react';
import { componentFromStream } from 'recompose';
import { BehaviorSubject, merge, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  debounceTime, filter, map, pluck, switchMap, catchError, tap,
} from 'rxjs/operators';
import Component from './Component';
import Error from '../Error';
import './User.css';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream((prop$) => {
  const loading$ = new BehaviorSubject(false);
  const getUser$ = prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(formatUrl),
    tap(() => loading$.next(true)),
    switchMap(url => ajax(url).pipe(
      pluck('response'),
      map(Component),
      tap(() => loading$.next(false)),
      catchError(error => of(<Error {...error} />)),
    )),
  );

  return merge(loading$, getUser$).pipe(
    map(result => (result === true ? <h3>Loding...</h3> : result)),
  );
});

export default User;
