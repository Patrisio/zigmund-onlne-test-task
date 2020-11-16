import React from 'react';
import styled from 'styled-components';
import IPagination from './interface';
import Button from '../Button';

const Pagination = ({ totalItems, itemsPerPage, paginate }: IPagination) => {
  const pagesNumbers = [];

  for (let i = 1; i <=  Math.ceil(totalItems / itemsPerPage); i++) {
    pagesNumbers.push(i);
  }

  return (
    <nav>
      <PaginationList>
        {
          pagesNumbers.map((number, idx) => (
            <li key={idx}>
              <Button
                onClick={() => paginate(number)}
                style={{
                  color: '#000'
                }}
              >
                { number }
              </Button>
            </li>
          ))
        }
      </PaginationList>
    </nav>
  );
};

export default Pagination;

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 30px;

  & > li:not(:last-child) {
    margin-right: 15px;
  }

  & > li > button {
    border: none;
    outline: none;
    background: #fff;
    padding: 20px 25px;
    border-radius: 121px;
    font-size: 18px;
    box-shadow: 1px 1px 21px rgba(0,0,0,.2);
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
    
    &:active {
      transform: scale(.95);
    }
  }
`;