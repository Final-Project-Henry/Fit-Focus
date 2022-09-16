import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  User_Login_State,
  selectUser,
} from "../../features/counter/counterSlice";

interface data_user{ 
  edad: number,
  genero: string,
  peso: number,
  altura: number,
  experiencia:string,
  equipamiento: boolean,
  objetivos: string,
}

export default function Form_rutinas() {
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [form_data, Set_form_data] = useState<data_user>({
    edad: 0,
    genero: "",
    peso: 0,
    altura: 0,
    experiencia:"",
    equipamiento: false,
    objetivos: "",
  });
  function handleChange(
    event: React.ChangeEvent<
      HTMLFormElement | HTMLInputElement | HTMLTextAreaElement
    >
  ): void {
    Set_form_data((pv:any) => ({ ...pv, [event.target.name]: event.target.value }));

  }
   
  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    // dispatch(User_Login_State(form_data?.edad);
    console.log(form_data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <label> Genero </label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="genero"
            value="man" 
            onChange={handleChange}
          />
          <label> Masculio </label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="genero"
            value="women"
            onChange={handleChange}
          />
          <label>Femenino</label>
          <br />
        </div>

        <div>
          <label>Edad</label>
          <br />
          <input
            type="number"
            autoComplete="off"
            name="edad"
            value={form_data?.edad}
            onChange={handleChange}
          />
          <br />
        </div>

        <div>
          <label>Peso</label>
          <br />
          <input
            type="number"
            name="peso"
            autoComplete="off"
            value={form_data?.peso}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Altura </label>
          <br />
          <input
            type="number"
            autoComplete="off"
            name="altura"
            value={form_data?.altura}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Experiencia </label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="experiencia"
            value="beginner"
            onChange={handleChange}
          />
          <label>pricipiante</label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="experiencia"
            value="medium"
            onChange={handleChange}
          />
          <label>intermedio</label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="experiencia"
            value="advanced"
            onChange={handleChange}
          />
          <label>avansado</label>
          <br />
        </div>

        <div>
          <label>Equipamiento</label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="equipamiento"
            value="true"
            onChange={handleChange}
          />
          <label>no</label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="equipamiento"
            value="false"
            onChange={handleChange}
          />
          <label>si</label>
        </div>

        <div>
          <label>cual es tu objetivo?</label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="objetivos"
            value="gain muscles"
            onChange={handleChange}
          />    
          <label>Ganar musculos</label>
          <br />
          <input
            type="checkbox"
            autoComplete="off"
            name="objetivos"
            value="lower fat percentage"
            onChange={handleChange}
          />
          <label>perder peso</label>
          <br />

        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
