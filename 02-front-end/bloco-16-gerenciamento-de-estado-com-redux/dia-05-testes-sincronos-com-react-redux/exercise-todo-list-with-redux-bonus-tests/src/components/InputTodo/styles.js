import styled from 'styled-components';

export const StyledInputTodo = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);

  input[type=button] {
    padding: 0 20px;
  }

  & > label {
    display: flex;
    align-self: center;
  }

  & > * {
    margin-right: 10px;
    align-self: stretch
  }

  & > *:last-child {
    margin-right: 0;
  }
`

export const Input = styled.input`
  padding: 10px;
  flex: 1;
`
