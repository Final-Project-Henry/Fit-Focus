import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { add_admin, change_profile, get_users, reset_admin_status, reset_change_info, change_info } from '../../../features/admin/admin';
import Loading from '../../loading/Loading';
import edit from '../imgs/edit.png';
import save from '../imgs/save.png';
import UserEditInfo from './UserEditInfo';
import UserEditProfile from './UserEditProfile';
import UserInfo from './UserInfo';
import UserProfile from './UserProfile';

interface profile {
  name: string
  email: string
  plan: string
  status: string
}
interface data {
  user: profile,
}
interface info {
  genre: string,
  age: number,
  weight: number,
  height: number,
  goal: string,
  experience: string,
}

export default function User() {

  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.admin);
  const admin = useAppSelector(state => state.user);
  const [editProfile, setEditProfile] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const params = useParams();
  const user = users.users?.find((e: any) => e._id === params.id);

  const [profile, setProfile] = useState<profile>({
    name: user?.name,
    email: user?.email,
    plan: user?.plan,
    status: user?.status,
  });

  const [info, setInfo] = useState<info>({
    genre: user?.userinfo[0]?.genre,
    age: user?.userinfo[0]?.age,
    weight: user?.userinfo[0]?.weight,
    height: user?.userinfo[0]?.height,
    goal: user?.userinfo[0]?.goal,
    experience: user?.userinfo[0]?.experience,
  });

  const onClick = () => {
    Swal.fire({
      title: '¿Estas seguro que quieres cambiar la propiedad admin de este usuario?',
      text: "Esta propiedad no podra ser cambiada por un usuario admin",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Aceptar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(add_admin(user._id))

      }
    })
  }

  const onEdit = (edit: string) => {
    if (edit === 'profile') setEditProfile(true);
    if (edit === 'info') setEditInfo(true);
  };

  const onSaveChanges = (edit: string) => {
    Swal.fire({
      title: '¿Estas seguro que quieres cambiar la informacion del usuario?',
      text: "Esta seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Cambiar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        if (edit === 'profile') {
          dispatch(change_profile({ _id: user._id, data: profile }))
          setEditProfile(false);
        }
        else if (edit === 'info') {
          dispatch(change_info({ _id: user._id, data: info }))
          setEditInfo(false);
        }
      }
      else {
        if (edit === 'profile') setEditProfile(false);
        if (edit === 'info') setEditInfo(false);
      }
    })

  }

  const onChange = (e: any) => {
    setProfile((state: profile) => { return { ...state, [e.target.name]: e.target.value } })
  }
  const onChange2 = (e: any) => {
    setInfo((state: info) => { return { ...state, [e.target.name]: e.target.value } })
  }


  useEffect(() => {
    if (user?.user_status !== "loaded") dispatch(get_users());
    if (users.admin_status === 'change') {
      Swal.fire(
        'Completado',
        'Cambio realizado con exito',
        'success'
      )
      dispatch(reset_admin_status());
    }
    if (users.change_info === 'change') {
      Swal.fire(
        'Completado',
        'Cambio realizado con exito',
        'success'
      );
      dispatch(reset_change_info());
    }
  }, [users.admin_status, users.change_info])

  return (
    <div>
      {
        !user ?
          <h1>No se encontró al usuario</h1>
          :
          <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginLeft: "3vw" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "500",
                margin: "25px 0 10px 0",
              }}
            >Editar usuario</h1>
            {
              user.user_status === 'default' ?
                <Loading />
                :
                <div style={{ display: "flex", justifyContent: "center", gap: "5vw", width: "100%" }}>
                  <div style={{ width: "30vw", backgroundColor: "white", padding: "20px", display: "flex", gap: "20px", flexDirection: "column" }}>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Detalle de la cuenta</h1>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-around" }}>
                      <img style={{ width: "40px", height: "40px", borderRadius: "20px" }} src={user.avatar} />
                      <p>{user.name}</p>
                      <img src={editProfile ? save : edit} onClick={() => editProfile ? onSaveChanges('profile') : onEdit("profile")} style={{ width: "15px", height: "15px", cursor: "pointer", marginLeft: "15vw" }} />
                    </div>
                    {
                      editProfile ?
                        <UserEditProfile data={{ user: user }} save={onChange} />
                        :
                        <UserProfile data={{ user: user }} />
                    }
                    {
                      admin.user?.superAdmin &&
                      <div style={{ display: "flex", justifyContent: 'space-between', gap: "10px", }}>
                        <p>Administrador: </p>
                        <p>{`${user.admin}`}</p>
                        <img onClick={onClick} src={edit} style={{ width: "15px", height: "15px", cursor: "pointer" }} />
                      </div>
                    }
                  </div>
                  <div style={{ width: "30vw", backgroundColor: "white", padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>Información de usuario</h1>
                    <img hidden={user?.userinfo.length === 0 ? true : false} src={editInfo ? save : edit} onClick={() => editInfo ? onSaveChanges('info') : onEdit("info")} style={{ width: "15px", height: "15px", cursor: "pointer", alignSelf: "flex-end" }} />
                    {
                      user.userinfo.length > 0 ?
                        editInfo ?
                          <UserEditInfo data={{ info: user.userinfo }} save={onChange2} />
                          :
                          <UserInfo data={{ info: user.userinfo }} />
                        : <p>No hay información del usuario</p>
                    }
                  </div>
                </div>
            }
          </div>
      }
    </div>
  )
}
