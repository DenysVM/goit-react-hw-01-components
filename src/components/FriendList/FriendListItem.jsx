import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friend_list_item}>
      <span className={styles.status} style={{ backgroundColor: isOnline ? 'green' : 'red', }}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" height="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
