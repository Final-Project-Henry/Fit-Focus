import { saveAs } from '@progress/kendo-drawing/pdf';
import React, { useState } from 'react';
import { StateSlice } from '../../../features/counter/counterSlice';
import edits from '../additional/edits';

interface profile {
  name: string
  email: string
  plan: string
  status: string
}
interface data {
  user: profile,
}

export default function UserEditProfile(props: { data: data, save: (e: any) => void, }) {
  const [profile, setProfile] = useState<profile>({
    name: props.data.user.name,
    email: props.data.user.email,
    plan: props.data.user.plan,
    status: props.data.user.status,
  });

  const onChange = (e: any) => {
    setProfile((state: profile) => { return { ...state, [e.target.name]: e.target.value } });
    props.save(e);
  }
  return (
    <div>
      {
        edits.userProfileProps.map((prop: string) => {
          if (Object.keys(edits.userProfileOptions).includes(prop)) return (
            <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
              <p>{prop}:</p>
              <select name={prop} value={(profile as any)[prop]} onChange={onChange}>
                {(edits.userProfileOptions as any)[prop].map((option: string) => (
                  <option style={{ width: "70%" }}>
                    {option}
                  </option>
                ))
                }
              </select>
            </div>
          )
          else return (
            <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
              <p>{prop}:</p>
              <input style={{ width: "70%" }} onChange={onChange} name={prop} value={(profile as any)[prop]} />
            </div>
          )
        })
      }
    </div>
  )
}
