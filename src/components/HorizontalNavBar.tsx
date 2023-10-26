import React, { Component } from 'react';
import styled from 'styled-components';
import { NavIcon } from './NavIcon';
import Text from './Text';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

interface State {

}

export const HorizontalNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollIntoView = (id: string) => {
    return (e: any) => {
      if (pathname.toLowerCase() !== "/ux") {
        navigate({ pathname: '/ux', hash: id }, { preventScrollReset: true })
      }

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

  }
  return (
    <Nav>
      <Pearl onClick={() => navigate({ pathname: "/" })}>
        <img src="/images/icons/pearl.png" alt="" />
      </Pearl>
      <NavLinks>
        <NavLink onClick={scrollIntoView('top')} >      <Text fontSize='20px' fontWeight='700' color='#B9B8CE'>HOME</Text> </NavLink>
        <NavLink onClick={scrollIntoView('portfolio')}> <Text fontSize='20px' fontWeight='700' color='#B9B8CE'>PORTFOLIO</Text></NavLink>
        <NavLink onClick={scrollIntoView('about')}>     <Text fontSize='20px' fontWeight='700' color='#B9B8CE'>ABOUT</Text></NavLink>
        <NavLink onClick={scrollIntoView('contact')}>   <Text fontSize='20px' fontWeight='700' color='#B9B8CE'>CONTACT</Text></NavLink>
      </NavLinks>
      {/* <Pearl onClick={() => navigate({ pathname: "/files/FGorgacheva_UX_CV_2023.pdf" })}>
        <img src="/images/icons/bubble.png" alt="" />
      </Pearl> */}

      <Bubble href='/files/FGorgacheva_UX_CV_2023.pdf' target='blank'>
        <img src="/images/icons/bubble.png" alt="" />
      </Bubble>

      {/* <NavIcon href="/cv" url="/images/icons/contact.svg"></NavIcon> */}
    </Nav >
  )
}


const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 10%;
  padding: 1%;
  backdrop-filter: blur(50px);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.7);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;

`

const Pearl = styled.div`
  padding: 0 30px;
  img{
    width: 50px;
    height: 50px;
  }
  p{
    width: 100%;
  }
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  font-family: nunito;
  font-size: 20px;
  font-weight: 500;
  color: #918CAB;

`;

const Bubble = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  padding-right:30px;

  img{
    width: 50px;
    height: 50px;
  }
`;

const NavLink = styled.a<{}>`

  transition: ease 0.25s;
   &:hover{
    transition: ease 0.25s;
    transform: scale(1.1);
  }
  text-decoration: none;
`
