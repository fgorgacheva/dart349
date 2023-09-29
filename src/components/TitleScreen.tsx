import React, { Component } from 'react';
import styled from 'styled-components';
import RoundedBox from './RoundedBox';
import scroll from '../images/arrow-scroll-down.svg'
interface Props {
  children?: React.ReactNode;
}

interface State {

}

export class TitleScreen extends Component<Props, State> {
  render() {
    return (
      <Main>
        <Name>Felicia Gorgacheva</Name>
        <Role>UX designer & 3D artist</Role>
        <Arrow src={scroll}></Arrow>
      </Main>
    )
  }
}

const Arrow = styled.img`
  position: absolute;
  bottom: 10%;

  -webkit-animation: vibrate-1 1s infinite both;
	        animation: vibrate-1 1s infinite both;

          @keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
            transform: translate(0, 4px);
  }
  50% {
            transform: translate(0, -4px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
`

const Main = styled.div`
  /* background-image: url('/images/background.png'); */

  height: 100vh;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: montserrat;
  color: #5f5f5f;
`;

const Name = styled.h1`
  font-weight: 500;
  letter-spacing: 2px;
`;

const Role = styled.h2`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 15px;
`;
