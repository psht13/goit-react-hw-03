import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import css from './App.module.css'

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};

export default App;
