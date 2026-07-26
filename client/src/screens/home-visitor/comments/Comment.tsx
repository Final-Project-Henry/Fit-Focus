import React from 'react';
import {datos} from '@/additional_info/comments';
import './Comment.css';

interface data {
  avatar?: any,
  name?: string,
  comment: string
}

export default function Comment(props: data) {
  return (
    <div className={"container"}>
      <img className={`rounded-full h-24 w-24 object-cover ${"img"}`} src={props.avatar} />
      <div className={"text"}>
        <h1 className={"name"}>{props.name}</h1>
        <p className={"comment"}>{props.comment}</p>
      </div>
    </div>
  )
}
