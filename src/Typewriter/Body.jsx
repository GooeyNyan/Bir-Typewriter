import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = ({ className }) => (
  <div className={['body', className].join(' ')}>
    <Top className="top" />
    <StyledOpening />
    <StyledInternalBoard2Crop />
    <Cutaway className="cutaway" />
    <StyledFront />
  </div>
);

Body.propTypes = {
  className: PropTypes.string.isRequired,
};

const Opening = ({ className }) => (
  <div className={['opening', className].join(' ')}>
    <InternalShadow className="internal-shadow" />
    <InternalHollow className="internal-hollow" />
    <StyledInternalBoardCrop />
  </div>
);

Opening.propTypes = {
  className: PropTypes.string.isRequired,
};

const InternalBoardCrop = ({ className }) => (
  <div className={['internal-board-crop', className].join(' ')}>
    <InternalBoard className="internal-board" />
  </div>
);

InternalBoardCrop.propTypes = {
  className: PropTypes.string.isRequired,
};

const InternalBoard2Crop = ({ className }) => (
  <div className={['internal-board2-crop', className].join(' ')}>
    <InternalBoard2 className="internal-board2" />
  </div>
);

InternalBoard2Crop.propTypes = {
  className: PropTypes.string.isRequired,
};

const Front = ({ className }) => (
  <div className={['front', className].join(' ')}>
    <Keyboard className="keyboard" />
    <Keys className="keys" />
  </div>
);

Front.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledOpening = styled(Opening)`
  position: absolute;
  width: 125px;
  height: 125px;
  top: -46px;
  left: 36px;
  border-radius: 100px;
  z-index: 0;
  transform: scaleY(0.4);
  overflow: hidden;
`;

const InternalShadow = styled.div`
  position: absolute;
  width: 135px;
  height: 135px;
  top: 60px;
  left: -5px;
  background: #e76056;
  border-radius: 100px;
`;

const InternalHollow = styled.div`
  position: absolute;
  width: 135px;
  height: 135px;
  top: 72px;
  left: -5px;
  background: #585756;
  border-radius: 100px;
  &::before {
    position: absolute;
    width: 99px;
    height: 99px;
    top: 55px;
    left: 18px;
    background: #434240;
    border-radius: 100px;
    transform: scaleY(2);
    content: '';
  }
  &::after {
    position: absolute;
    width: 93px;
    height: 93px;
    top: 62px;
    left: 21px;
    background: #2e2e2e;
    border-radius: 100px;
    transform: scaleY(2);
    content: '';
  }
`;

const StyledInternalBoardCrop = styled(InternalBoardCrop)`
  position: absolute;
  width: 88px;
  height: 88px;
  top: 129px;
  left: 18px;
  border-radius: 100px;
  transform: scaleY(2);
  overflow: hidden;
`;

const InternalBoard = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: -43px;
  left: 11px;
  border-left: 34px solid transparent;
  border-right: 34px solid transparent;
  border-bottom: 60px solid #626262;
  border-radius: 50%;
  transform: scaleY(1.25);
`;

const StyledInternalBoard2Crop = styled(InternalBoard2Crop)`
  position: absolute;
  width: 100px;
  height: 50px;
  top: 24px;
  left: 77px;
  overflow: hidden;
`;

const InternalBoard2 = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  top: -26px;
  background: #626262;
  border-radius: 50%;
  &::before {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 2px;
    left: 2px;
    background: #a2a2a2;
    border-radius: 50%;
    content: '';
  }
  &::after {
    position: absolute;
    width: 34px;
    height: 34px;
    top: 5px;
    left: 5px;
    background: #b7b7b7;
    border-radius: 50%;
    content: '';
  }
`;

const Cutaway = styled.div`
  position: absolute;
  width: 40px;
  height: 10px;
  top: 14px;
  left: 79px;
  background: #fff;
  &:before {
    position: absolute;
    width: 40px;
    height: 3px;
    top: 7px;
    background: #b7b7b7;
    box-shadow: 0 2px #575754;
    content: '';
  }
  &::after {
    position: absolute;
    width: 10px;
    height: 5px;
    left: 5px;
    top: 5px;
    background: #575757;
    box-shadow: 20px 0 #575754;
    content: '';
  }
`;

const StyledFront = styled(Front)`
  position: relative;
  width: 208px;
  height: 17px;
  top: 68px;
  left: -4px;
  margin: 0 auto;
  background: #c45549;
  border-radius: 0 0 3px 3px;
  &::before {
    position: absolute;
    width: 200px;
    height: 100px;
    top: -91px;
    left: 4px;
    background: #e76056;
    border-radius: 0 0 3px 3px;
    transform: perspective(700px) rotate3d(1, 0, 0, 34deg);
    content: '';
  }
`;

const Keyboard = styled.div`
  position: relative;
  width: 180px;
  height: 68px;
  top: -67px;
  margin: 0 auto;
  background: #3c3c3c;
  border-radius: 3px;
  box-shadow: 0 -4px #c85549;
  transform: perspective(700px) rotate3d(1, 0, 0, 34deg);
  &::after {
    position: absolute;
    width: 35px;
    height: 7px;
    top: -19px;
    left: 128px;
    background: #b9bdbe;
    box-shadow: 0 2px #ae6d64;
    content: '';
  }
`;

const Keys = styled.div`
  position: relative;
  width: 12px;
  height: 7px;
  top: -122px;
  left: 27px;
  background: #696967;
  border-radius: 1px 1px 3px 3px;
  /* 键的阴影 */
  box-shadow: 14px 0 #696967, 28px 0 #696967, 42px 0 #696967, 56px 0 #696967, 70px 0 #696967, 84px 0 #696967, 98px 0 #696967, 112px 0 #696967, 126px 0 #696967, 140px 0 #696967, -7px 10px #696967, 7px 10px #696967, 21px 10px #696967, 35px 10px #696967, 49px 10px #696967, 63px 10px #696967, 77px 10px #696967, 91px 10px #696967, 105px 10px #696967, 119px 10px #696967, 133px 10px #696967, 147px 10px #696967, 0 20px #696967, 14px 20px #696967, 28px 20px #696967, 42px 20px #696967, 56px 20px #696967, 70px 20px #696967, 84px 20px #696967, 98px 20px #696967, 112px 20px #696967, 126px 20px #696967, 140px 20px #696967, -9px 30px #696967, 7px 30px #696967, 21px 30px #696967, 35px 30px #696967, 49px 30px #696967, 63px 30px #696967, 77px 30px #696967, 91px 30px #696967, 105px 30px #696967, 119px 30px #696967, 133px 30px #696967, 149px 30px #696967, -5px 40px #696967, 145px 40px #696967;
  &::before {
    position: absolute;
    width: 12px;
    height: 7px;
    top: -3px;
    background: #d9d9d9;
    border-radius: 2px 2px 3px 3px;
    /* 键 */
    box-shadow: 14px 0 #d9d9d9, 28px 0 #d9d9d9, 42px 0 #d9d9d9, 56px 0 #d9d9d9, 70px 0 #d9d9d9, 84px 0 #d9d9d9, 98px 0 #d9d9d9, 112px 0 #d9d9d9, 126px 0 #d9d9d9, 140px 0 #d9d9d9, -7px 10px #d9d9d9, 7px 10px #d9d9d9, 21px 10px #d9d9d9, 35px 10px #d9d9d9, 49px 10px #d9d9d9, 63px 10px #d9d9d9, 77px 10px #d9d9d9, 91px 10px #d9d9d9, 105px 10px #d9d9d9, 119px 10px #d9d9d9, 133px 10px #d9d9d9, 147px 10px #d9d9d9, 0 20px #d9d9d9, 14px 20px #d9d9d9, 28px 20px #d9d9d9, 42px 20px #d9d9d9, 56px 20px #d9d9d9, 70px 20px #d9d9d9, 84px 20px #d9d9d9, 98px 20px #d9d9d9, 112px 20px #d9d9d9, 126px 20px #d9d9d9, 140px 20px #d9d9d9, -9px 30px #d9d9d9, 7px 30px #d9d9d9, 21px 30px #d9d9d9, 35px 30px #d9d9d9, 49px 30px #d9d9d9, 63px 30px #d9d9d9, 77px 30px #d9d9d9, 91px 30px #d9d9d9, 105px 30px #d9d9d9, 119px 30px #d9d9d9, 133px 30px #d9d9d9, 149px 30px #d9d9d9, -5px 40px #d9d9d9, 145px 40px #d9d9d9;
    content: '';
  }
  &::after {
    position: absolute;
    width: 124px;
    height: 7px;
    top: 37px;
    left: 14px;
    background: #d9d9d9;
    border-radius: 2px 2px 3px 3px;
    content: '';
    box-shadow: 0 3px #696969;
  }
`;

const StyledBody = styled(Body)`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  top: 100px;
`;

const Top = styled.div`
  position: relative;
  width: 182px;
  height: 62px;
  margin: 0 auto;
  background: #eb7568;
  transform: perspective(500px) rotate3d(1, 0, 0, 56deg);
`;


export default StyledBody;
