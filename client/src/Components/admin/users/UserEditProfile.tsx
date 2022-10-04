import { saveAs } from '@progress/kendo-drawing/pdf';
import React, { useState } from 'react';
import { StateSlice } from '../../../features/counter/counterSlice';

interface profile {
  name: string
  email: string
  plan: string
  status: string
}
interface data {
  user: profile,
}

export default function UserEditProfile(props: { data: data, save:(e:any)=>void, }) {
  const [profile, setProfile] = useState<profile>({
    name: props.data.user.name,
    email: props.data.user.email,
    plan: props.data.user.plan,
    status: props.data.user.status,
  });

  const onChange =(e:any)=>{
    setProfile((state:profile)=>{return{...state, [e.target.name]:e.target.value}});
    props.save(e);
  }
  return (
    <div>
      {
        ["name", "email", "plan", "status"].map((prop: string) => (
            <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
              <p>{prop}:</p>
              <input name={prop} value={(profile as any)[prop]} onChange={onChange}/>
            </div>
          ))
      }
    </div>

  )
}
