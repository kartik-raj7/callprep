import React from 'react';
import styled, { keyframes } from 'styled-components';

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-500px);
  }
`;

const generateBoxShadow = (n) => {
  let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;

  for (let i = 2; i <= n; i++) {
    value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
  }

  return value;
};

const shadowsSmall = generateBoxShadow(700);
const shadowsMedium = generateBoxShadow(200);
const shadowsBig = generateBoxShadow(100);

const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
  animation: ${animStar} 80s linear infinite;
  position: absolute;
`;

const Stars2 = styled.div`
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${shadowsMedium};
  animation: ${animStar} 80s linear infinite;
  position: absolute;
`;

const Stars3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};
  animation: ${animStar} 80s linear infinite;
  position: absolute;
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
`;

const Span = styled.span`
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ParallaxStars = () => {
  return (
    <div style={{width:'100vw',zindex:'-10',height:'100vh'}}>
      <Stars></Stars>
      <Stars2></Stars2>
      <Stars3></Stars3>
    </div>
  );
};

export default ParallaxStars;
