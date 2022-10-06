import React from "react";

interface prop {
  img: any;
  tittle: string;
  value: string | number | undefined;
}

export default function DataCard(props: { data: prop }) {
  return (
    <div className="flex bg-gray-900 p-4 rounded-full">
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
          <b className="text-white">{props.data.tittle}</b>
        </h1>
        <p className="text-md font-bold text-white">{props.data.value}</p>
      </div>
    </div>
  );
}
