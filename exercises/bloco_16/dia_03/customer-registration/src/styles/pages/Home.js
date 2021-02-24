import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    margin-bottom: 20px;
  }
`

export const Menu = styled.div`
  display: grid;
  padding: 30px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
  background-color: var(--minion-yellow);
`

export const MenuItem = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--blue-jeans);
  transition: filter 0.2s;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 20px;
  color: var(--french-pink);
  text-shadow: 1px 1px 2px black;

  &:hover {
    filter: brightness(0.8);
  }
`
