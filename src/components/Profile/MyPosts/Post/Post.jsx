import s from './Post.module.css';
import React from "react";

const Post = (props) => {
    return (
        <li className={s.item}><a href="/">
            <img src="img/avatar.jpg" alt="avatar"/>
            <span className={s.title}>{`${props.message}`}</span>
            <div className={s.likes}>
                <i className="far fa-thumbs-up"></i>
                <span className={s.like}>{`${props.likes}`} </span>
            </div>
        </a></li>
    );
}

export default Post;