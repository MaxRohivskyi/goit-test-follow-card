import styled from 'styled-components';

export const CardListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  column-gap: 30px;
  @media ${p => p.theme.media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${p => p.theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  width: auto;
  padding: 30px 0;
`;
