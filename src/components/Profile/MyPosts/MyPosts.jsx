import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            My posts
            <div className={s.new_post}>
                <h3 className={s.new_post_title}>New post</h3>
                <form action="#">
                    <textarea name="newpost" id="newpost" cols="100" rows="5" placeholder={'Add post...'}></textarea>
                    <button>Send</button>
                </form>
            </div>
            <div className={s.posts}>
                <ul>
                    <Post message={'hello'}/>
                    <Post message={'My firs post'}/>
                    <Post message={'I started new project'}/>
                    <Post message={'My WIP'}/>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;