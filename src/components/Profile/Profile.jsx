import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

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

        <MyPosts />

    </div>
}

export default Profile;