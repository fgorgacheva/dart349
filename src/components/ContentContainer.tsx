import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

interface State {

}

export class ContentContainer extends Component<Props, State> {
  render() {
    return (
      <Main>{this.props.children}</Main>
    )
  }
}

const Main = styled.div`
  /* background-color: #EAECF4; */
  /* background-image: url('/images/background.png'); */

  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;