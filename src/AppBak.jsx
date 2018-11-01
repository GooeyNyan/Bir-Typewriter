import React from 'react';
import { combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { componentFromStream, createEventHandler } from 'recompose';
import User from './User';
import './observableConfig';

const App = componentFromStream((props$) => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(({ target: { value } }) => value),
    startWith(''),
  );

  return combineLatest(props$, value$).pipe(
    tap(console.warn),
    map(([props, value]) => (
      <div>
        <input onChange={handler} placeholder="Github username" />
        <User user={value} />
      </div>
    )),
  );
});

export default App;
