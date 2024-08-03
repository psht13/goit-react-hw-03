import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardContent}>
        <img src={image} alt={name + 'avatar'} className={css.cardImage} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{'@' + tag} </p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsItemSpan}>Followers</span>
          <span className={css.statsItemSpan}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsItemSpan}>Views</span>
          <span className={css.statsItemSpan}>{stats.views}</span>
        </li>
        <li className={css.statsItem} style={{ borderRight: 'none' }}>
          <span className={css.statsItemSpan}>Likes</span>
          <span className={css.statsItemSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
