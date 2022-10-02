import React from "react";

interface feedback {
  email: string;
  comment: string;
  rating: number | string;
}

export default function CommentDetail(props: { feedback: feedback }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        width: "auto",
        padding: "5px 10px 5px 10px",
        gap: "5px",
      }}
    >
      <p>
        <b>Email: </b>
        {props.feedback.email}
      </p>
      <p>
        <b>Rating: </b>
        {props.feedback.rating}
      </p>
      <p>
        <b>Comment: </b>
        {props.feedback.comment}
      </p>
      <button
        style={{
          backgroundColor: "Black",
          color: "white",
          width: "50%",
          padding: "0 10px 0 10px",
          marginBottom: "5px",
        }}
      >
        Delete
      </button>
    </div>
  );
}
