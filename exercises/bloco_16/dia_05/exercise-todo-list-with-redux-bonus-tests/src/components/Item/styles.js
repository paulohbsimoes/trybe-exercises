import styled from 'styled-components';

export const StyledItem = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 20px;

  &.selected {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const Status = styled.p`
  font-style: italic;
  font-size: 0.8rem;
`

export const DescriptionText = styled.p`
  font-size: 1.2rem;
`
