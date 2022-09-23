import React from 'react';
import data from '../../../additional_info/comments';
import styles from './Comment.module.css';

interface data {
  avatar: any,
  name: string,
  comment: string
}

export default function Comment(props: data | any) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={props.data.avatar} />
      <div className={styles.text}>
        <h1 className={styles.name}>{props.data.name}</h1>
        <p className={styles.comment}>{props.data.comment}</p>
      </div>
    </div>
  )
}
