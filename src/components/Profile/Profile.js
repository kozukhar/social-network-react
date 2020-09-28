import React from 'react';
import styles from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.js'



const Profile = () => {
    return (
        <div className={styles.content}>
            <div className="main-image">
                <img src="https://i.pinimg.com/236x/c7/fd/d6/c7fdd6b11236ee872a06f7a86284828a.jpg" alt="main content photo"/>
                <div className="ava-description">
                    ava + description
                </div>
                <MyPosts /> 
                <div className="new-post">
                   new post
                </div>
            </div>
        </div>
    )
}

export default Profile;