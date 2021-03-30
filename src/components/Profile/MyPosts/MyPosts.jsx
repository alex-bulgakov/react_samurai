import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import TextInputContainer from "./TextInput/TextInputContainer";
import StoreContext from "../../../StoreContext";

const MyPosts = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let postsElements = store.getState().profilePage.posts.map(p => <Post key={p.id} message={p.message}
                                                                                          likes={p.likesCount}/>);

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
                                <TextInputContainer placeholder={"Add post"} button_text={"Send"}/>
                            </div>

                        </div>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPosts;