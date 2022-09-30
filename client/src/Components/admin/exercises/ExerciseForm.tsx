import React from 'react';
import { useForm } from 'react-hook-form';


export default function ExerciseForm() {

  const { register, handleSubmit } = useForm();

  const onSubmit = () => {

  }
  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"5vh"}}>
      <h1 style={{ fontSize: "3rem", fontWeight: "500" }}>Create a new exercise</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop:"5vh", backgroundColor:"gray", padding:"15px"}}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input id='name'  {...register('name')} />
        </div>
        <div>
          <label htmlFor='difficulty'>Difficulty: </label>
          <input id='difficulty' {...register('difficulty')} />
        </div>
        <div>
          <label htmlFor='muscles'>Muscles: </label>
          <input id='muscles'  {...register('muscles')} />
        </div>
        <div>
          <label htmlFor='genre'>Genre: </label>
          <input id='genre'  {...register('genre')} />
        </div>
        <div>
          <label htmlFor='video'>Video: </label>
          <input id='video' {...register('video')} />
        </div>
        <div>
          <label htmlFor='premium'>Premium: </label>
          <input id='premium'{...register('premium')} />
        </div>
        <div>
          <label htmlFor='description'>Description: </label>
          <input id='description'  {...register('description')} />
        </div>
      </form>
    </div>
  )
}
