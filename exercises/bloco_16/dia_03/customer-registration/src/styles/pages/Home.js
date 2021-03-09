import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Menu = styled.div`
  background-color: var(--minion-yellow);
  border-radius: 8px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  max-height: 500px;
  max-width: 500px;
  padding: 30px;
  width: 100%;
`;

export const MenuItem = styled(Link)`
  align-items: center;
  background: var(--blue-jeans);
  border-radius: 8px;
  color: white;

  /* color: var(--custom-red); */
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  text-shadow: 1px 1px 2px #ccc;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
