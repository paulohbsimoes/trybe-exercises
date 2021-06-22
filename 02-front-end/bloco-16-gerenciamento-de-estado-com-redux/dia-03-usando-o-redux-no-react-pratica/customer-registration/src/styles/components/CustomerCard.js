import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

export const StyledCustomerCard = styled.div`
  background-color: var(--blue-jeans);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  filter: brightness(0.9);
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 15px;
  position: relative;
  text-shadow: 0 1px 1px black;
  transition: filter 0.2s , transform 0.2s , box-shadow 0.3s;

  & > *:not( :last-child ) {
    font-family: Ubuntu , Roboto , sans-serif;
    margin-bottom: 5px;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    filter: brightness(1);
    transform: translateY(-4px);
  }
`;

export const Delete = styled(AiFillDelete)`
  color: black;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: color 0.2s;

  :hover {
    color: rgba(255, 0, 0, 0.7);
  }
`;
