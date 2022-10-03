import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { delete_comment } from "../../../features/admin/admin";
import { Exercises_Get } from "../../../features/counter/counterSlice";

interface feedback {
  email: string;
  comment: string;
  rating: number | string;
}

export default function CommentDetail(props: {
  feedback: feedback;
  name: string;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(Exercises_Get());
  }, []);

  const onDelete = () => {
    Swal.fire({
      title: `¿Eliminar el comentario de "${props.feedback.email}" la DB?`,
      text: "Este proceso es irreversible.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(
          delete_comment({ email: props.feedback.email, name: props.name })
        );
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    });
  };

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
        onClick={onDelete}
        className="font-semibold"
        style={{
          margin: " auto",
          backgroundColor: "#A70E0E",
          color: "white",
          width: "30%",
          padding: "2px",
          marginBottom: "10px",
          marginTop: "10px",
          borderRadius: "0.375rem",
        }}
      >
        Delete
      </button>
    </div>
  );
}
