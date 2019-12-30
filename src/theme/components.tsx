import styled from 'styled-components/native'

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.View`
  width: ${(props: {size: number}) => props.size / 12 * 100}%;
`;
