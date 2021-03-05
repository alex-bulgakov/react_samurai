import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import Button from "./Button/Button";
import TextInput from "./TextInput/TextInput";

const MyPosts = (props) => {


    let postsElements = props.data.map(p => <Post message={p.message} likes={p.likesCount}/>)

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
                    {
                        postsElements
                    }
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;