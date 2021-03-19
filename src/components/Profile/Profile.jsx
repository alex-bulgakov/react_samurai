import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {Route} from "react-router-dom";


const Profile = (props) => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts store={props.store}/>
        </div>
    );
}

export default Profile;