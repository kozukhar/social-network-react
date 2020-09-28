import React from 'react';
import styles from './Post.module.css'

const Post = () => {
    return (
        <div className = {styles.post}>
            <img className = {styles.avatar} src="https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg" alt="avatar"/>
            <p className = 'textMessage'>some text</p>
            <div className = 'like'>
                <button>like</button>
            </div>
            <div className = 'disLike'>
                <button>disLike</button>
            </div>
        </div>
    )
}

export default Post;