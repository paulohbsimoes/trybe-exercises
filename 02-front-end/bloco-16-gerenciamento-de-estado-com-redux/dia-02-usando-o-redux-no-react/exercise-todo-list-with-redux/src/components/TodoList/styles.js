import styled from 'styled-components';

export const StyledTodoList = styled.ul`
  list-style: none;
  margin: 0 auto;

  & li:nth-child(odd) {
    background: rgba(0, 50, 123, 0.2);
  }
`;

export const TasksNotFound = styled.p`
  margin-top: 40px;
  font-size: 1.2rem;
  text-align: center;
`
