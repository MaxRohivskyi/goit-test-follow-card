import styled from 'styled-components';
import logo from '../../img/Logo.png';
import chat from '../../img/Сhat.png';

export const CardItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadow.shadowCardRectangle};
`;

export const Avatar = styled.img`
  position: absolute;
  top: 187.42px;
  left: 159.48px;
  width: 62px;
  height: 62px;
  z-index: 1;
  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.boxShadow.shadowCardBtn};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${p => p.avatar}), ${p => p.theme.colors.backgroundCard};
`;

export const Frame = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 178px;
  left: 150px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.boxShadow.shadowCardFrame};
`;

export const Info = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 284px auto 36px;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
`;
export const Text = styled.span`
  margin: 16px auto 0;
  color: ${p => p.theme.colors.primary};
  :nth-child(1) {
    margin: 0;
  }
`;

export const UserText = styled.span`
  color: ${p => p.theme.colors.userText};
`;
