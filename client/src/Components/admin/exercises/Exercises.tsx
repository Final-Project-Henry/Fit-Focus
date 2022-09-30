import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import dele from '../imgs/delete.png';
import premium from '../imgs/premium.png';
import free from '../imgs/normal.png';
import { Exercises_Get } from '../../../features/counter/counterSlice';

interface exercise {
  _id: string,
  name: string,
  difficulty: string,
  muscles: string,
  genre: string,
  video: string,
  premium: boolean,
  description: string,
}


export default function Exercises() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate(`/admin/exercises/${id}`);
  }

  const onDelete = (id: string) => {
    navigate(`/admin/exercises/${id}`);
  }

  const onCreate =()=>{
    navigate('/admin/exercises/add');
  }

  useEffect(() => {
    dispatch(Exercises_Get());
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginBottom:"10vh"}}>
      <h1 style={{ fontSize: "3rem", fontWeight: "500" }}>Exercises</h1>
      <button style={{backgroundColor:"#111827", color:"white", width:"20vw", height:"5vh", fontSize:"1.5rem", fontWeight:"500"}} onClick={onCreate}>Add a new exercise</button>
      <table>
        <thead style={{ backgroundColor: "white", }}>
          <tr>
            <th style={{ width: "20vw" }}>ID</th>
            <th style={{ width: "35vw" }}>Name</th>
            <th style={{ width: "8vw" }}>Plan</th>
            <th style={{ width: "15vw" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.exercises?.map((exer: exercise) => (
              <tr>
                <td style={{ padding: "10px" }}>{exer._id}</td>
                <td>{exer.name}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <img style={{ width: "20px", height: "20px" }} src={exer.premium?premium:free} />
                    {exer.premium?'Premium':'Normal'}
                  </div>
                </td>
                <td style={{ display: "flex", justifyContent: "space-around" }}>
                  <button style={{backgroundColor:"#111827", color:"white", width:"5vw"}} onClick={() => onClick(exer._id)}>Edit</button>
                  <p 
                  style={{backgroundImage:`url(${dele})`, backgroundSize:"contain", width:"5vw", height:"3vh", backgroundRepeat:"no-repeat", cursor:"pointer"}}
                  onClick={()=>{onDelete(exer._id)}}
                  > </p>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
