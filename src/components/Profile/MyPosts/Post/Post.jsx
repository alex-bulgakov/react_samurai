import s from './Post.module.css';
import React from "react";

const Post = (props) => {
    return (
        <li className={s.item}><a href="#">
            <img src="avatar.jpg" alt="avatar"/>
            <span className={s.title}>{`${props.value}`}</span>
            <span className="like">1 like</span>
        </a></li>
    );
}

export default Post;