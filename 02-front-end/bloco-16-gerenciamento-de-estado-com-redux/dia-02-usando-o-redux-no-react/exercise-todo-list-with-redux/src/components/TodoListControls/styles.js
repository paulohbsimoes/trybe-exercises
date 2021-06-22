import styled, { css } from 'styled-components';
import { FaTrashAlt, FaRegClock, FaFilter } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

export const StyledTodoListControls = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  user-select: none;
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  height: 70px;
`

export const Options = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;

  & > * {
    margin-right: 15px;
  }
`;

export const TrashButton = styled(FaTrashAlt)`
  cursor: pointer;
`

export const DoneButton = styled(MdDone)`
  cursor: pointer;
`

export const InProgressButton = styled(FaRegClock)`
  cursor: pointer;
`

export const DropdownButton = styled(FaFilter)`
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 15px;
`

export const DropdownContent = styled.div`
  position: absolute;
  display: none;
  right: 0;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  text-shadow: none;
  flex-direction: column;
  width: 200px;
`;

export const Dropdown = styled.div`
  margin-left: auto;
  position: relative;

  &:hover ${DropdownContent} {
    display: flex;
  }
`;

export const DropdownOption = styled.div.attrs(({ selected }) => ({ selected }))`
  cursor: pointer;
  margin: 10px;

  &:hover {
    color: red;
  }

  ${ props => props.selected && css`color: red;` }
`
