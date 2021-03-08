import styled from 'styled-components';

export const StyledLogin = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  h1 {
    color: var(--french-pink);
    text-align: center;
    text-shadow: 1px 1px 2px var(--blue-jeans);
  }
`;

export const StyledForm = styled.form`background: var(--blue-jeans);
  border-radius: 8px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  min-width: 400px;
  padding: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 15px;
  }

  label input {
    border: 3px solid transparent;
    border-radius: 5px;
    font-size: 1.5rem;
    margin-top: 5px;
    padding: 15px 10px;
    transition: border 0.2s ease-in;

    &:focus {
      border: 3px solid #666;
      outline: none;
    }
  }

  button {
    background-color: var(--minion-yellow);
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 20px;
    padding: 10px;
    text-transform: uppercase;
    transition: filter 0.2s;

    &:focus {
      outline: none;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
