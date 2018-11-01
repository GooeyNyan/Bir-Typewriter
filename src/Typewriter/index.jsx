import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { from, interval, zip } from 'rxjs';
import {
  map, scan, switchMap, delay,
} from 'rxjs/operators';
import { componentFromStream } from 'recompose';
import Platen from './Platen';
import Paper from './Paper';
import Body from './Body';
import '../observableConfig';

const Typewriter = ({ className, message }) => (
  <div className={['typewriter', className].join(' ')}>
    <StyledPlatenAndPaper message={message} />
    <Body />
  </div>
);

const createMessageStream = (message, itv) => {
  const message$ = from(message);
  const interval$ = interval(itv);
  const messageInterval$ = zip(message$, interval$, letter => letter);
  return messageInterval$.pipe(
    scan((acc, cur) => acc + cur, ''),
  );
};

const TypewriterWithStream = componentFromStream(props$ => props$.pipe(
  switchMap(props => createMessageStream(props.message, 150)),
  map(message => <StyledTypewriter message={`${message}_`} />),
));

Typewriter.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const PlatenAndPaper = ({ className, message }) => (
  <div className={['platen-and-paper', className].join(' ')}>
    <Platen message={message} />
    <Paper message={message} />
  </div>
);

PlatenAndPaper.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const StyledPlatenAndPaper = styled(PlatenAndPaper)`
  position: relative;
  left: 28px;
`;

const StyledTypewriter = styled(Typewriter)`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

export default TypewriterWithStream;
