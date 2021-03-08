import styled from 'styled-components';

export const StyledForm = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 50px;
  width: 100%;

  button {
    background-color: var(--blue-jeans);
    color: var(--cultured);
    cursor: pointer;
    font-weight: 700;
    margin-top: 20px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  input, button {
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
    font-size: 1.2rem;
    padding: 10px;
    transition: box-shadow 0.2s;

    &:focus {
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
      outline: none;
    }
  }

  *:not( :last-child ) {
    margin-bottom: 18px;
  }
`;

export const StyledRegisterCustomer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.7rem;
    padding: 50px;
    text-align: center;
  }
`;

export default StyledForm;
