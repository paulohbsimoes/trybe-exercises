import styled from 'styled-components';

export const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    color: var(--french-pink);
    text-shadow: 1px 1px 2px var(--blue-jeans);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 400px;
  background: var(--blue-jeans);
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight: 700;
  }

  label input {
    margin-top: 5px;
    padding: 15px 10px;
    border-radius: 5px;
    border: 3px solid transparent;
    font-size: 1.5rem;
    transition: border 0.2s ease-in;

    &:focus {
      outline: none;
      border: 3px solid #666;
    }
  }

  button {
    padding: 10px;
    border: none;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    transition: filter 0.2s;
    background-color: var(--minion-yellow);
    text-transform: uppercase;
    font-weight: 700;

    &:focus {
      outline: none;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
