import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {Route} from "react-router-dom";


const Profile = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;