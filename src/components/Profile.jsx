import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div className={s.banner}>
        <img src="banner.jpg" alt="banner"/>
    </div>
    <div className={s.bio}>
        <div className={s.bio__img}>
            <img src="avatar.jpg" alt="avatar"/>
        </div>
        <div className={s.bio__descr}>
            <ul>
                <li>Name: Anonim</li>
                <li>Age: 99</li>
                <li>Sex: M</li>
                <li>Country: Japan</li>
            </ul>
        </div>
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
        </div>
        <div className='item'>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;