import React from 'react';
import styles from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <a href="#">Profile</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Messages</a>
                </li>
                <li className={styles.item}>
                    <a href="#">News</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Music</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;