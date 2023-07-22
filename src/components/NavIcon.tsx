import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  url?: string;
  href?: string;
  hash?: string;
}

interface State {

}

export const NavIcon = ({ href, url, hash }: Props) => {
  const navigate = useNavigate()
  return (
    <Icon onClick={() => navigate({ pathname: href, hash: hash })}>
      <img src={url} alt="" />
    </Icon>
  )
}



const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  &:hover{
    transition: ease 0.15s;
    transform: scale(1.2);
  }
  img{
    margin: auto;
    width: 30px;
  }

  
`;
