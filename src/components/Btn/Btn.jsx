import PropTypes from 'prop-types';
import { BtnWrapper } from './Btn.styled';

const Btn = ({ currentIsFollowing, handleToggle }) => {
  return (
    <BtnWrapper
      type="button"
      onClick={handleToggle}
      currentIsFollowing={currentIsFollowing}
    >
      {!currentIsFollowing ? 'FOLLOW' : 'FOLLOWING'}
    </BtnWrapper>
  );
};

Btn.propTypes = {
  currentIsFollowing: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Btn;
