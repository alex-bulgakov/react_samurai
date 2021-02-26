import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import Button from "./Button/Button";
import TextInput from "./TextInput/TextInput";

const MyPosts = () => {
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
                    <Post message={'hello'} likes={'1'}/>
                    <Post message={'My firs post'} likes={'10'}/>
                    <Post message={'I started new project'} likes={'4'}/>
                    <Post message={'My WIP'} likes={'8'}/>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;