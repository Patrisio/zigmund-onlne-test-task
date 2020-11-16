import React from 'react';
import Input from '../Input';
import Button from '../Button';
import IFormProps from './interface';
import styled from "styled-components";

const Form: React.FC<IFormProps> = ({ onSubmit }) => {
  return (
    <FormEl onSubmit={onSubmit}>
      <Input placeholder='Введите название компании' />

      <Button>Поиск</Button>
    </FormEl>
  );
}

export default Form;

const FormEl = styled.form`
  display: flex;
  justify-content: space-between;
  width: 330px;
  margin-bottom: 30px;
`;