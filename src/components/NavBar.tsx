import React, { Component } from 'react';
import styled from 'styled-components';
import { NavIcon } from './NavIcon';

interface Props {
  children?: React.ReactNode;
  title: string;
}

interface State {

}

export class NavBar extends Component<Props, State> {
  render() {
    return (
      <Nav>
        <Pearl>
          <img src="/images/icons/pearl.png" alt="" />
          <p>{this.props.title}</p>
        </Pearl>

        <NavIcon href="/" url="/images/icons/home.svg"></NavIcon>
        <NavIcon href="/ux/portfolio" url="/images/icons/UX.svg"></NavIcon>
        <NavIcon href="/3D" url="/images/icons/3D.svg"></NavIcon>
        <NavIcon href="/misc" url="/images/icons/misc.svg"></NavIcon>
        {/* <NavIcon href="/" hash="#contact" url="/images/icons/contact.svg"></NavIcon> */}
      </Nav>
    )
  }
}


const Nav = styled.div`
  position: fixed;
  align-items: left;
  justify-content: center;
  text-align: center;
  width: 125px;
  height: 100vh;
  padding: 1%;

  display: grid;
  grid-gap: 15px;
  grid-template-rows: 1.25fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: minmax(0,1fr);
  border-right: 1px solid #cdc8e4;
`;

const Pearl = styled.div`
  img{
    width: 50px;
    height: 50px;
  }
  p{
    width: 100%;
  }
  width: 100%;
  position: relative;
  padding-bottom: 10%;
  text-align: center;
  font-family: nunito;
  font-size: 20px;
  font-weight: 500;
  color: #918CAB;
`;
