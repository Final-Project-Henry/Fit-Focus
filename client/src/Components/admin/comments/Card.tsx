import React from "react";
import { datos } from "../../../additional_info/comments";
import CommentDetail from "./CommentDetail";

interface feedback {
  email: string;
  comment: string;
  rating: number | string;
}

interface datos {
  name: string;
  feedback: Array<feedback>;
}

export default function Card(props: { datos: datos }) {
  return (
    <div
      style={{
        backgroundColor: "#252525",
        margin: "20px",
        paddingBottom: "5px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "1.2rem",
          padding: "10px",
          marginLeft: "10px",
          fontWeight: "500",
        }}
      >
        {props.datos.name}
      </h1>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "10px" }}>
        {props.datos.feedback.map((e: feedback) => (
          <CommentDetail feedback={e} name={props.datos.name} />
        ))}
      </div>
    </div>
  );
}
