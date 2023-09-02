import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(friend => <li key={friend.id} className={styles.item}>
                <span className={styles.status}
                style={{
              backgroundColor: friend.isOnline ? 'green' : 'red',
                       }}>{friend.isOnline}</span>
                <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" height="48" />
                <p className={styles.name}>{ friend.name}</p>
            </li>)}
        </ul>)
        };
    
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};