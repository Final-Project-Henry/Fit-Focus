import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Exercises_Get } from "../../../features/counter/counterSlice";
import Card from "./Card";

export default function Comments() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const comments = user.exercises?.filter((e: any) => e.feedback.length > 0);

  useEffect(() => {
    if (user.exercises?.length === 0) dispatch(Exercises_Get());
  }, [dispatch, user.exercises?.length]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      {comments.length > 0 ? (
        comments.map((e: any) => (
          <Card datos={{ feedback: e.feedback, name: e.name }} />
        ))
      ) : (
        <h1>COMMENTS NOT FOUND</h1>
      )}
    </div>
  );
}
