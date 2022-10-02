import React from 'react';
import {datos} from '../../../additional_info/comments';
import styles from './Comment.module.css';

interface data {
  avatar?: any,
  name?: string,
  comment: string
}

export default function Comment(props: data) {
  return (
    <div className={styles.container}>
      <img className={`rounded-full h-24 w-24 object-cover ${styles.img}`} src={props.avatar} />
      <div className={styles.text}>
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.comment}>{props.comment}</p>
      </div>
    </div>
  )
}
