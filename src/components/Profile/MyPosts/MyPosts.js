import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css'


const MyPosts = () => {
    console.log(styles)
    return (
        <div className = "myPosts">
            My Posts
            <form action="#">
                <input type="text" className = 'newPost'/>
                <button className = {styles.add-2}>add Post</button>
            </form>
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;