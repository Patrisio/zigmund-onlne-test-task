import React from 'react';
import IButton from './interface';
import styled from "styled-components";

const Button = ({ children, style, onClick }: IButton) => {
  return (
    <ButtonElement
      onClick={onClick}
      style={style}
    >
      {children}
    </ButtonElement>
  );
}

export default Button;

const ButtonElement = styled.button<IButton>`
  padding: 10px 20px;
  background: #00BFFF;
  border: none;
  border-radius: 10px;
  color: #fff;
  box-shadow: 2px 2px 12px rgba(0,0,0,.3);
  outline: none;
  cursor: pointer;
  transition: .3s all;

  &:hover {
    background: #0496c7;
  }

  &:active {
    transform: scale(.95);
    box-shadow: 0 0 12px rgba(0,0,0,.3);
  }
`;