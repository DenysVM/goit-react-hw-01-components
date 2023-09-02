import { Profile } from "./Profile/Profile";
import user from './Profile/user.json'; 
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json';
import { FriendList } from "./FriendList/FriendList"
import friends from './FriendList/friends.json'

export const App = () => {
  return (
    <div>
      <h2>1 - Профіль соціальної мережі</h2>
      <Profile user={user} />

      <h2>2 - Секція статистики</h2>
      <Statistics title="Upload stats" stats={data} />

      <h2>3 - Список друзів</h2>
      <FriendList friends={friends}/>
            
    </div>
     );
};