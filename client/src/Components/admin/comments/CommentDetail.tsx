import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { delete_comment } from "../../../features/admin/admin";
import { Exercises_Get } from "../../../features/counter/counterSlice";
import { v4 as uuidv4 } from "uuid";

interface feedback {
  email: string;
  comment: string;
  rating: number | string;
  report: Array<string>;
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
      className="rounded p-3"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        margin: "5px",
        width: "auto",
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
      <p>
        <b>Report by: </b>
        {props.feedback.report.length === 0 ? (
          <span>No one</span>
        ) : (
          props.feedback.report.map((e: string) => (
            <span className="block" key={uuidv4()}>
              {e}
            </span>
          ))
        )}
      </p>
      <button
        onClick={onDelete}
        className="font-semibold hover:bg-red-800 bg-red-700 text-white w-20 rounded m-auto mt-2 p-2"
      >
        Delete
      </button>
    </div>
  );
}
