import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paper = ({ className }) => (
  <div className={['paper', className].join(' ')}>
    <StyledNote />
  </div>
);

Paper.propTypes = {
  className: PropTypes.string.isRequired,
};

const message = '测试文字';

const Note = ({ className }) => (
  <div className={className}>
    {message}
  </div>
);

Note.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledNote = styled(Note)`
  position: relative;
  width: auto;
  font-family: courier;
  padding: 5px;
  overflow: hidden;
`;

const StyledPaper = styled(Paper)`
  position: absolute;
  width: 138px;
  height: 125px;
  top: 88px;
  left: 110px;
  background: #fff;
`;

export default StyledPaper;
