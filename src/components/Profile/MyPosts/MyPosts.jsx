import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import TextInput from "./TextInput/TextInput";
import TextInputContainer from "./TextInput/TextInputContainer";

const MyPosts = (props) => {


    let postsElements = props.store.getState().profilePage.posts.map(p => <Post key={p.id} message={p.message}
                                                                                likes={p.likesCount}/>)

    return (
        <div className={s.my_posts}>
            My posts
            <div className={s.posts}>
                <ul>
                    {
                        postsElements
                    }
                </ul>
            </div>
            <div className={s.new_post}>
                <h3 className={s.new_post_title}>New post</h3>
                <TextInputContainer placeholder={"Add post"} button_text={"Send"} store={props.store}/>
            </div>

        </div>
    );
}

export default MyPosts;