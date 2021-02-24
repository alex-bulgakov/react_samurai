import s from './MyPosts.module.css';
import React from "react";

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
                    <li className={s.item}><a href="#">Post one</a></li>
                    <li className={s.item}><a href="#">Post two</a></li>
                    <li className={s.item}><a href="#">Post three</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MyPosts;