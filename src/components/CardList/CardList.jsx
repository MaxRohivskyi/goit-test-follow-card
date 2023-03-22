import CardItem from '../CardItem';
import PropTypes from 'prop-types';
import users from '../../db/users.json';
import { CardListWrapper } from './CardList.styled';

const CardList = () => {
  return (
    <CardListWrapper>
      {users.map(originalUser => (
        <li key={originalUser.id}>
          <CardItem originalUser={originalUser}></CardItem>
        </li>
      ))}
    </CardListWrapper>
  );
};

CardItem.propTypes = {
  originalUser: PropTypes.object.isRequired,
};

export default CardList;
