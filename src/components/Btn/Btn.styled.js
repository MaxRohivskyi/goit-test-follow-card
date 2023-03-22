import styled from 'styled-components';

export const BtnWrapper = styled.button`
  padding: 14px 0;
  margin: 26px auto 0;
  width: 196px;
  height: 50px;
  text-align: center;
  color: ${p => p.theme.colors.btnCardText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  background-color: ${p =>
    p.currentIsFollowing ? p.theme.colors.accent : p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.boxShadow.shadowCardBtn};
  transition: all ${p => p.theme.transition};
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    transform: scale(1.05);
  }
`;
