import React from 'react';
import styled from "styled-components";
import IInput from './interface';

const Input = ({ placeholder, icon }: IInput) => {
  return (
    <View>
      {icon}
      <InputElement placeholder={placeholder} />
    </View>
  );
}

export default Input;

const View = styled.div`
  display: inline-block;
  justify-content: space-between;
`

const InputElement = styled.input`
  box-sizing: border-box;
  padding: 10px 30px;
  border-radius: 10px;
  border: 2px solid #eee;
  width: 240px;
  outline: none;
`;