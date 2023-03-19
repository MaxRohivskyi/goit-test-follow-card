import {
  CardItemWrapper,
  Logo,
  Chat,
  Rectangle,
  Avatar,
  Btn,
} from './CardItem.styled';

const CardItem = () => {
  return (
    <CardItemWrapper>
      <Logo />
      <Chat />
      <Rectangle />
      <Avatar />

      {/* <Btn>FOLLOW</Btn> */}
    </CardItemWrapper>
  );
};

export default CardItem;
