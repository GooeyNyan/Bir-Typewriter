import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Platen = ({ className }) => (
  <div className={['platen', className].join(' ')}>
    <CarriageLever />
    <PlatenKnobRight />
    <PlatenKnobLeft />
  </div>
);

Platen.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledPlaten = styled(Platen)`
  position: absolute;
  top: 100px;
  left: 85px;
  width: 180px;
  height: 30px;
  background: #585755;
  &::before {
    position: absolute;
    top: 15px;
    width: 180px;
    height: 15px;
    background: #3d3d3d;
    content: "";
  }
  &::after {
    position: absolute;
    top: 3px;
    width: 180px;
    height: 4px;
    box-shadow: 0 12px #3d3d3d, 0 16px #3d3d3d, 0 20px #3d3d3d;
    background: #888888;
    content: "";
  }
`;

const CarriageLever = styled.div`
  position: absolute;
  top: -10px;
  left: -30px;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  border-top: 3px solid #dbdbdb;
  border-right: 3px solid #dbdbdb;
  &::before {
    position: absolute;
    top: 0px;
    left: -2px;
    width: 40px;
    height: 30px;
    border-radius: 8px;
    border-top: 2px solid #7a7a7a;
    border-right: 2px solid #7a7a7a;
    content: "";
  }
  &::after {
    position: absolute;
    top: 2px;
    left: -15px;
    width: 25px;
    height: 10px;
    border-radius: 30px/10px;
    transform: rotate(-45deg);
    box-shadow: 0 2px #7a7a7a, -1px 2px #7a7a7a;
    background: #dbdbdb;
    content: "";
  }
`;

const PlatenKnobRight = styled.div`
  position: absolute;
  top: 13px;
  left: 140px;
  width: 50px;
  height: 4px;
  background: #585755;
  &::before {
    position: absolute;
    top: -6px;
    left: 45px;
    width: 10px;
    height: 8px;
    box-shadow: 0 -2px #888888, 0 6px #3d3d3d, 0 10px #3d3d3d;
    background: #585755;
    content: "";
  }
`;

const PlatenKnobLeft = styled.div`
  position: absolute;
  top: 8px;
  left: -10px;
  width: 30px;
  height: 4px;
  background: #585755;
  &::before {
    position: absolute;
    top: -1px;
    left: 3px;
    width: 3px;
    height: 6px;
    box-shadow: 0 -4px #888888, 0 4px #3d3d3d, -3px 0 #3d3d3d;
    background: #585755;
    content: "";
  }
  &::after {
    position: absolute;
    top: -8px;
    left: 15px;
    width: 10px;
    height: 15px;
    background: #585755;
    content: "";
  }
`;

export default StyledPlaten;
