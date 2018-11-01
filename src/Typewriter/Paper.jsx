import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paper = ({ className, message }) => (
  <div className={['paper', className].join(' ')}>
    <StyledNote message={message} />
  </div>
);

Paper.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const Note = ({ className, message }) => (
  <div className={className}>
    {message.split('\n').map((i, key) => <div key={key}>{i}</div>)}
  </div>
);

Note.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

const StyledNote = styled(Note)`
  position: relative;
  width: auto;
  padding: 5px;
  overflow: hidden;
`;

const StyledPaper = styled(Paper)`
  position: absolute;
  width: 138px;
  height: 125px;
  top: 88px;
  transform: translate3d(
    ${props => 120 - ((props.message.split('\n').slice(-1)[0].length * 6.875))}px,
    ${props => -4 - ((props.message.split('\n').length - 1) * 28)}px,
  0);
  animation: transform 0.3s;
  background: url('https://www.publicdomainpictures.net/pictures/40000/velka/paper-texture-1359509235aJV.jpg');
`;

export default StyledPaper;
