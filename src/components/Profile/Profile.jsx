import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import {Route} from "react-router-dom";


const Profile = () => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;