import styled from 'styled-components';

export const AppContainer = styled.main`
  padding: 24px;
  margin: 0 auto;
  @media ${p => p.theme.media.mobileMin} {
    width: 100%;
  }
  @media ${p => p.theme.media.tablet} {
    max-width: 767px;
  }
  @media ${p => p.theme.media.desktop} {
    max-width: 1068px;
  }
`;
