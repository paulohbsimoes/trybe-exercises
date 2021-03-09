import styled, { css } from 'styled-components';

export const StyledRegisteredCustomers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;

  @media ( max-width : 1200px ) {

    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ( max-width : 900px ) {

    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const NoClients = styled.div`
  font-size: 1.5rem;
  padding: 20px;
`;

export const DropdownMenu = styled.div`
  align-self: center;
  background: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: white;

  /* display: flex; */
  display: none;
  flex-direction: column;
  font-size: 1.3rem;
  left: 0;
  position: absolute;
  top: 55px;
  width: 100%;
  z-index: 1;

`;

export const Dropdown = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;
  max-width: 300px;
  position: relative;
  width: 100%;

  &:hover ${DropdownMenu} {
    display: flex;
  }
`;

export const DropdownButton = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  font-size: 1.5rem;
  padding: 15px;
  text-align: center;
`;

export const DropdownOption = styled.a`
  cursor: pointer;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;

  ${(props) => props.selected && css`
  color: var(--blue-jeans);
  `}

  :not( :last-child ) {
    border-bottom: 1px solid #555;
  }

  :hover {
    background-color: #333;
  }
`;
