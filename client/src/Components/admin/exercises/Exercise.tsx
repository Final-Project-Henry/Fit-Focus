import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { Exercises_Get } from '../../../features/counter/counterSlice';
import edit from '../imgs/edit.png';

export default function Exercise() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const user = useAppSelector(state => state.user);
  const exercise = user.exercises?.find((e: any) => e._id === params.id)

  useEffect(() => {
    dispatch(Exercises_Get());
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "500" }}>Edit Exercise</h1>
      {
        exercise ?
        <div style={{ display: "flex", justifyContent: "center", gap: "5vw", width: "100%" }}>
        <div style={{ width: "60vw", backgroundColor: "white", padding: "20px", display: "flex", gap: "20px", flexDirection: "column" }}>
            {
              Object.keys(exercise).map((prop: string) => {
                if (!["_id", "feedback","__v"].includes(prop)) return (
                  <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                    <p>{prop}:</p>
                    <p>{prop==='premium'?`${exercise[prop]}`:exercise[prop]}</p>
                    <img src={edit} style={{width:"15px", height:"15px", cursor:"pointer"}} />
                  </div>
                )
              })
            }
            </div>
          </div>
          : <h1>EXERCISE NOT FOUND</h1>
      }
    </div>
  )
}
