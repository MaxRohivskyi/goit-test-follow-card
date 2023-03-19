import styled from 'styled-components';
import logo from '../../img/Logo.png';
import chat from '../../img/Сhat.png';
import avatar from '../../img/Hansel.png';

export const CardItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 168px auto 0;
  width: 380px;
  height: 460px;
  background: ${p => p.theme.colors.backgroundCard};
  box-shadow: ${p => p.theme.boxShadow.shadowCard};
  border-radius: ${p => p.theme.radii.large};
  transition: all ${p => p.theme.transition};
  cursor: pointer;
  &:hover,
  :focus {
    box-shadow: ${p => p.theme.boxShadow.shadowCardAccent};
    transform: scale(1.05);
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});
`;

export const Chat = styled.div`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${chat});
`;

export const Rectangle = styled.div`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  box-shadow: ${p => p.theme.boxShadow.shadowCardRectangle};
`;

export const Avatar = styled.div`
  position: absolute;
  top: 187.42px;
  left: 159.48px;
  width: 62px;
  height: 62px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.boxShadow.shadowCardBtn};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${avatar}), ${p => p.theme.colors.backgroundCard};
`;

export const Btn = styled.button`
  padding: 14px 0;
  margin: 26px auto 36px;
  width: 196px;
  height: 50px;
  text-align: center;
  color: ${p => p.theme.colors.btnCardText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.boxShadow.shadowCardBtn};
  transition: all ${p => p.theme.transition};
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    transform: scale(1.05);
  }
`;
