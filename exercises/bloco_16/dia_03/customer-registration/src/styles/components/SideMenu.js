import styled, { css } from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const StyledSideMenu = styled.div`
  align-items: center;
  background-color: #111;
  bottom: 0;
  color: white;
  display: flex;
  flex-direction: column;
  left: -300px;
  overflow: hidden;
  padding: 80px 20px 0;
  position: fixed;
  top: 0;
  transition: 0.3s ease-in-out;
  width: 300px;
  z-index: 1;

  ${({ isOpen }) => isOpen && css`
  left: 0;
  `}

  a {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    color: var(--minion-yellow);
    font-family: sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 0 1px black;
    transition: background 0.2s;
    width: 100%;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const SideMenuButton = styled(GrClose)`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 20px;
  top: 20px;

  path {
    stroke: white;
    stroke-width: 2px;
    transition: stroke-width 0.2s;
  }

  &:hover path {
    stroke-width: 3px;
  }
`;
