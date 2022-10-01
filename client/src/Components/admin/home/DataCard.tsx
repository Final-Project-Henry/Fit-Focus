import React from "react";

interface prop {
  img: any;
  tittle: string;
  value: string | number | undefined;
}

export default function DataCard(props: { data: prop }) {
  return (
    <div className="flex bg-gray-200 p-4">
      <img src={props.data.img} width="85px" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "15vw",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1>
          <b>{props.data.tittle}</b>
        </h1>
        <p className="text-md">{props.data.value}</p>
      </div>
    </div>
  );
}
