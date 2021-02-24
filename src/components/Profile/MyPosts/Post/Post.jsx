import s from './Post.module.css';
import React from "react";

const Post = () => {
    return (
        <li className={s.item}><a href="#">
            <img src="avatar.jpg" alt="avatar"/>
            <span className={s.title}>Test post</span>
        </a></li>
    );
}

export default Post;