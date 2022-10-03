import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { add_admin, get_users } from '../../../features/admin/admin';
import edit from '../imgs/edit.png';

export default function User() {

  const dispatch = useAppDispatch();
  const [admin_state, setAdmin] = useState('not_loaded');
  const users = useAppSelector(state => state.admin);
  const admin = useAppSelector(state => state.user);
  const params = useParams();
  const user = users.users?.find((e: any) => e._id === params.id);

  const onClick = () => {
    dispatch(add_admin(user._id));
    setAdmin('loaded');
    alert('Change successful');
  }

  useEffect(() => {
    if (user?.user_status !== "loaded") dispatch(get_users());
  }, [users, admin_state])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginLeft:"3vw" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "500",
          margin: "25px 0 10px 0",
        }}
      >Edit User</h1>
      {
        user ?
          <div style={{ display: "flex", justifyContent: "center", gap: "5vw", width: "100%" }}>
            <div style={{ width: "30vw", backgroundColor: "white", padding: "20px", display: "flex", gap: "20px", flexDirection: "column" }}>
              <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Account Detail</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img style={{ width: "40px", height: "40px", borderRadius: "20px" }} src={user.avatar} />
                <p>{user.name}</p>
              </div>
              {
                Object.keys(user).map((prop: string) => {
                  if (["name", "email", "plan", "status"].includes(prop)) return (
                    <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                      <p>{prop}:</p>
                      <p>{user[prop]}</p>
                      <img src={edit} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
                    </div>
                  )
                })
              }
              {
                admin.user?.superAdmin &&
                <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                  <p>Admin: </p>
                  <p>{`${user.admin}`}</p>
                  <img onClick={onClick} src={edit} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
                </div>
              }
            </div>
            <div style={{ width: "30vw", backgroundColor: "white", padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>User info</h1>
              {
                user.userinfo.length > 0 ?
                  Object.keys(user.userinfo[0])?.map((prop: string) => {
                    if (prop === 'equipment') return (
                      <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                        <p>{prop}: </p>
                        <p>{`${user.userinfo[0][prop]}`}</p>
                        <img src={edit} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
                      </div>
                    )
                    if (prop !== "_id") return (
                      <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                        <p>{prop}: </p>
                        <p>{user.userinfo[0][prop]}</p>
                        <img src={edit} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
                      </div>)
                    else return;
                  })
                  : <p>No User info</p>
              }
            </div>
          </div>
          : <h1>USER NOT FOUND</h1>
      }
    </div>
  )
}
