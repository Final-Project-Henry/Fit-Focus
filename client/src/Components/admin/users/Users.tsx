import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { get_users } from '../../../features/admin/admin';
import active from '../imgs/active.png';
import desactive from '../imgs/desactive.png';
import premium from '../imgs/premium.png';
import free from '../imgs/normal.png';
import dele from '../imgs/delete.png';

interface user {
  _id: string,
  name: string,
  email: string,
  status: string,
  avatar: string,
  plan: string,
  signupDate: string,
  admin: boolean,
  superAdmin: boolean,
  routines: Array<any>,
  userinfo: Array<any>
}


export default function Users() {

  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.admin);
  const navigate = useNavigate();

  const onClick = (id: string) => {
    navigate(`/admin/users/${id}`);
  }

  const onDelete = (id: string) => {
    navigate(`/admin/users/${id}`);
  }

  useEffect(() => {
    dispatch(get_users());
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "500" }}>Users</h1>
      <table>
        <thead style={{ backgroundColor: "white", }}>
          <tr>
            <th style={{ width: "15vw" }}>ID</th>
            <th style={{ width: "15vw" }}>User</th>
            <th style={{ width: "20vw" }}>Email</th>
            <th style={{ width: "8vw" }}>Status</th>
            <th style={{ width: "8vw" }}>Plan</th>
            <th style={{ width: "15vw" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.users?.map((user: user) => (
              <tr>
                <td style={{ padding: "10px" }}>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <img style={{ width: "10px", height: "10px" }} src={user.status === 'activated' ? active : desactive} />{user.status}
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <img style={{ width: "20px", height: "20px" }} src={user.plan === "normal" ? free : premium} />
                    {user.plan}
                  </div>
                </td>
                <td style={{ display: "flex", justifyContent: "space-around" }}>
                  <button style={{backgroundColor:"#111827", color:"white", width:"5vw"}} onClick={() => onClick(user._id)}>Edit</button>
                  <p 
                  style={{backgroundImage:`url(${dele})`, backgroundSize:"contain", width:"5vw", height:"3vh", backgroundRepeat:"no-repeat", cursor:"pointer"}}
                  onClick={()=>{onDelete(user._id)}}
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
