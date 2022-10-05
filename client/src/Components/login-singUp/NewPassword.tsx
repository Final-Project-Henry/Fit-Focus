import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import loading_icon from "../assets/icons/loading.svg"
import icon from "../assets/icons/login.jpg"

import {
  User_Login_State,
  selectUser,
  EditUser,
} from "../../features/counter/counterSlice";
import Swal from "sweetalert2";


const NewPassword = () => {
  let { id } = useParams()
  let user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const Navegation = useNavigate()
  const [validar, setvalidadr] = useState(false)
  const [Form_data, Set_form_data] = useState({
    password: "",
    Validpassword: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void {
    Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
  }
  useEffect(() => {
    if (user.status == "Info changed succesfully") {
      Swal.fire({
        title: "Su contraseña fue cambiada correctamente",
        icon: "info",
        showCancelButton: false,
        confirmButtonColor: "#5f4efc",
        confirmButtonText: "iniciar sesión"
      }).then((result) => {
        if (result.isConfirmed) {
          Navegation("/auth/login")

        }
      });
    }

  }, [user.status])
  //////////enviar de datos  por medio de los input//////////////////////////////////////////
  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    if (Form_data.password === Form_data.Validpassword) {
      let data = { password: Form_data.password }
      const token = id
      dispatch(EditUser({ token, data }));
    } else {
      setvalidadr(true)
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
                `url(${icon})`,
              backgroundSize: "cover"
            }} >
            <h1 style={{ color: "white", fontSize: "2rem", width: "20vw", marginLeft: "7vw", marginTop: "30vh" }}>“La clave para iniciar algo
              es dejar de hablar y
              ponerse a hacerlo”</h1>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Nueva contraseña
            </h2>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="••••••••"
                value={Form_data.password}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold">
                  validar  Contraseña
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                type="password"
                name="Validpassword"
                autoComplete="off"
                placeholder="••••••••"
                value={Form_data.Validpassword}
                onChange={(event) => handleChange(event)}
              />
              {validar && <label className="text-red-500">contraseña incorrecta</label>}
            </div>
            <div className="mt-[150px]">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full :bg-gray-600"
                onClick={handleSubmit}
              >
                {user.status === "none" ? (
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
export default NewPassword;
