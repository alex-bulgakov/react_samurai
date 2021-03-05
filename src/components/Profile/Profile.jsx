import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = () => {
    return (
        <div>
            <Profileinfo/>
            <MyPosts data={postsData}/>
        </div>
    );
}

export default Profile;