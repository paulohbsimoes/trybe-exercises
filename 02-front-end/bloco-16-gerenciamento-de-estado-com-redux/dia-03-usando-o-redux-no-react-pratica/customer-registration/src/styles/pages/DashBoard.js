import styled from 'styled-components';
import { HiOutlineMenu } from 'react-icons/hi';
import { GrLogout } from 'react-icons/gr';

export const Main = styled.div`
  transition: margin-left 0.5s;

  &.openNav {
    margin-left: 300px;
  }
`;

export const SideBarButton = styled(HiOutlineMenu)`
  cursor: pointer;
  font-size: 3rem;

  path {
    stroke: white;
    transition: stroke-width 0.2s;
  }

  &:hover path {
    stroke-width: 3px;
  }
`;
export const StyledHeader = styled.header`
  align-items: center;
  background-color: #222;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 10px 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const LogoutButton = styled(GrLogout)`
  cursor: pointer;
  font-size: 2.5rem;

  path {
    stroke: white;
    transition: stroke-width 0.2s;
  }

  &:hover path {
    stroke-width: 3px;
  }
`;

export const DashBoardContainer = styled.div`
  padding-top: 65px;
`;
