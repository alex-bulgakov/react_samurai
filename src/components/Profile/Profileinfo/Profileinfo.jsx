import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return <div>
        <div className={s.banner}>
            <img src="img/banner.jpg" alt="banner"/>
        </div>
        <div className={s.bio}>
            <div className={s.bio__img}>
                <img src="img/avatar.jpg" alt="avatar"/>
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
    </div>
}

export default Profileinfo;