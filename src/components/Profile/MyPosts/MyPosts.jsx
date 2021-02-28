import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import Button from "./Button/Button";
import TextInput from "./TextInput/TextInput";

const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'hello', likesCount: 1},
        {id: 2, message: 'lsdfo sdof ', likesCount: 2},
        {id: 3, message: 'owqt[oij', likesCount: 11},
        {id: 4, message: 'sdf', likesCount: 5},
    ];

    return (
        <div className={s.my_posts}>
            My posts
            <div className={s.new_post}>
                <h3 className={s.new_post_title}>New post</h3>
                <form action="#">
                    <TextInput placeholder={"Add post"}/>
                    <Button value={"Send"}/>
                </form>
            </div>
            <div className={s.posts}>
                <ul>
                    <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
                    <Post message={postsData[1].message} likes={postsData[1].likesCount}/>
                    <Post message={postsData[2].message} likes={postsData[2].likesCount}/>
                    <Post message={postsData[3].message} likes={postsData[3].likesCount}/>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;