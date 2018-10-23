import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Platen from './Platen';
import Paper from './Paper';
import Body from './Body';

const Typewriter = ({ className }) => (
  <div className={['typewriter', className].join(' ')}>
    <StyledPlatenAndPaper />
    <Body />
  </div>
);

Typewriter.propTypes = {
  className: PropTypes.string.isRequired,
};

const PlatenAndPaper = ({ className }) => (
  <div className={['platen-and-paper', className].join(' ')}>
    <Platen />
    <Paper />
  </div>
);

PlatenAndPaper.propTypes = {
  className: PropTypes.string.isRequired,
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

export default StyledTypewriter;
