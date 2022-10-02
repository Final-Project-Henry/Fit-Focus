import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks";

import {
  User_Login_State,
  selectUser,
  EditUser,
} from "../../features/counter/counterSlice";
interface Propos {
  loading_icon: string;
  icon:string
}

const ValidadUser: React.FC<Propos> = ({ loading_icon,icon }) => {
  let user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();
  const [loagi, setloagin] = useState(false)
  const [Form_data, Set_form_data] = useState({
    email:"",
  });
  const [Respusta, SetResp] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }

  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setloagin(true)
    const response = await axios.post("http://localhost:3001/newpassword",Form_data);
    const resp = response.data;
    SetResp(resp)
    if(resp){
      setloagin(false)
      
    }
  }

  return (
    <div className='h-full w-full flex justify-center content-center'>
      {/* component */}
      <div className="py-6 flex-1 content-center justify-center ">
        <div className="flex bg-white shadow-2xl overflow-hidden mx-auto sm:mt-0  max-w-sm h-auto lg:max-w-[68%]">
          <div
            className="hidden lg:block lg:w-[50%] bg-no-repeat bg-center bg-[length:350px_200px]"
            style={{
              backgroundImage:
                `url(${icon})`
            }}
          />
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Varificación
            </h2>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  email
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                value={Form_data.email}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="absolute w-[30%] m-2 text-gray-500">
              <p>{Respusta&&"verefique su correo eletronico, si aun no le llega el link para cambiar su contraseña , recomiendo que mieres en la caja de span"}</p>
            </div>
            <div className="mt-[150px]">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full :bg-gray-600"
                onClick={handleSubmit}
              >
                {!loagi? (
                  "Aceptar"
                ) : (
                  <span className=" flex justify-center">
                    <img className="animate-spin w-5 mx-2" src={loading_icon} />
                    Loading...
                  </span>
                )}
              </button>

              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4" />
                <Link
                  to="/auth/login"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  volver a iniciar sesión
                </Link>
                <span className="border-b w-1/5 md:w-1/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
};
      export default ValidadUser;
