import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Exercises_Get } from "../../../features/counter/counterSlice";
import Card from "./Card";

export default function Comments() {
  let id: number = 0;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const comments = user.exercises?.filter((e: any) => e.feedback.length > 0);

  useEffect(() => {
    if (user.exercises?.length === 0) dispatch(Exercises_Get());
  }, [dispatch, user.exercises?.length]);

  return (
    <div>
      <h1 style={{ fontSize: "3rem", fontWeight: "500", padding: "20px" }}>
        Comments
      </h1>
      <div className="grid grid-cols-4">
        {comments.length > 0 ? (
          comments.map((e: any) => (
            <Card key={id++} datos={{ feedback: e.feedback, name: e.name }} />
          ))
        ) : (
          <h1>No hay comentarios</h1>
        )}
      </div>
    </div>
  );
}
