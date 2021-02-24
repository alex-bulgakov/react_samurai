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
        <div className={s.posts}>
            My posts
            <div className={s.new_post}>
                <h3 className={s.new_post_title}>New post</h3>
                <textarea name="newpost" id="newpost" cols="100" rows="5" placeholder={'Add post...'}></textarea>
            </div>
            <div className={s.posts}>
                <ul>
                    <li className={s.item}><a href="#">Post one</a></li>
                    <li className={s.item}><a href="#">Post two</a></li>
                    <li className={s.item}><a href="#">Post three</a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Profile;