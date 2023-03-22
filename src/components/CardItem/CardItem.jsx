import useLocalStorage from '../../hooks/useLocalStorage';
import Btn from '../Btn';
import PropTypes from 'prop-types';
import {
  CardItemWrapper,
  Logo,
  Chat,
  Rectangle,
  Avatar,
  Frame,
  Info,
  Text,
  UserText,
} from './CardItem.styled';

const CardItem = ({ originalUser }) => {
  const { id, user, tweets, followers, avatar } = originalUser;

  const [follower, setFollower] = useLocalStorage('FOLLOWER', followers);
  const [currentIsFollowing, setIsCurrentIsFollowing] = useLocalStorage(
    `FOLLOWING_${id}`,
    false
  );

  const handleToggle = () => {
    const newFollower = currentIsFollowing ? followers : followers + 1;
    setFollower(newFollower);
    setIsCurrentIsFollowing(!currentIsFollowing);
  };

  const followersInFormat = new Intl.NumberFormat('en-US').format(follower);

  return (
    <CardItemWrapper>
      <Logo />
      <Chat />
      <Rectangle />
      <Avatar src={avatar} alt="avatar" />
      <Frame />
      <Info>
        <Text> {user}</Text>
        <Text> {tweets}</Text>
        <Text>{followersInFormat} Followers</Text>
        <Btn
          currentIsFollowing={currentIsFollowing}
          handleToggle={handleToggle}
        />
      </Info>
    </CardItemWrapper>
  );
};

CardItem.propTypes = {
  originalUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default CardItem;
