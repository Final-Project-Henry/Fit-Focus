import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { change_exercise, reset_change_exer } from '../../../features/admin/admin';
import { Exercises_Get } from '../../../features/counter/counterSlice';
import edit from '../imgs/edit.png';
import save from '../imgs/save.png';
import ExerDetail from './ExerDetail';
import ExerEdit from './ExerEdit';

interface exercise {
  name: string;
  difficulty: string;
  muscles: string;
  genre: string;
  video: string;
  premium: boolean;
  description: string;
}

export default function Exercise() {
  const dispatch = useAppDispatch();
  const [editExer, setEdit] = useState(false);
  const params = useParams();
  const user = useAppSelector(state => state.user);
  const admin = useAppSelector(state => state.admin);
  const exercise = user.exercises?.find((e: any) => e._id === params.id);

  const [exer, setExer] = useState<exercise>({
    name: exercise?.name,
    difficulty: exercise?.difficulty,
    muscles: exercise?.muscles,
    genre: exercise?.genre,
    video: exercise?.video,
    premium: exercise?.premium,
    description: exercise?.description,
  });

  const onEdit = () => {
    setEdit(true);
  }

  const onSave = () => {
    Swal.fire({
      title: '¿Estas seguro que quieres cambiar los detalles del ejercicio?',
      text: "Esta seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: "Cancelar",
      confirmButtonText: 'Aceptar',
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(change_exercise({ _id: exercise._id, data: exer }));
      }
    })
    setEdit(false);
  }

  const onChange = (e: any) => {
    if (e.target.name === 'name') setExer((state: exercise) => { return { ...state, name: e.target.value.toUpperCase() } })
    setExer((state: exercise) => { return { ...state, [e.target.name]: e.target.value } })
  }

  useEffect(() => {
    dispatch(Exercises_Get());

    if (admin.change_exer === 'change') {
      Swal.fire(
        'Completado',
        'Cambio realizado con exito',
        'success'
      );
      dispatch(reset_change_exer());
    }

  }, [admin.change_exer])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10vh", marginLeft: "3vw" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "500" }}>Editar Ejercicio</h1>
      {
        exercise ?
          <div style={{ display: "flex", justifyContent: "center", gap: "5vw", width: "100%" }}>
            <div style={{ width: "60vw", backgroundColor: "white", padding: "20px", display: "flex", gap: "20px", flexDirection: "column" }}>
              <img onClick={editExer ? onSave : onEdit} src={editExer ? save : edit} style={{ width: "15px", height: "15px", cursor: "pointer", alignSelf: "flex-end" }} />
              {
                editExer ?
                  <ExerEdit exer={exercise} save={onChange} />
                  :
                  <ExerDetail exer={exercise} />
              }
            </div>
          </div>
          : <h1>EJERCICIO NO ENCONTRADO</h1>
      }
    </div>
  )
}
