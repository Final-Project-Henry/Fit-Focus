import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import {
    User_Register_State,

    selectUser,
} from "../../features/counter/counterSlice";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
interface Propos {
    facebook?: string;
    google?: string;
    linkedin?: string;
    loading_icon?: string;
}

const Login2: React.FC<Propos> = ({ loading_icon }) => {
    let user = useAppSelector(selectUser);

    const user_logeao = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const [Form_data, Set_form_data] = useState({
        name: "",
        email: "",
        password: "",
    });

    //////////obtencion de datos  por medio de los input//////////////////////////////////////////

    function handleChange(
        event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
    ): void {
        Set_form_data((pv) => ({ ...pv, [event.target.name]: event.target.value }));
    }

    //////////enviar de datos  por medio de los input//////////////////////////////////////////
    function handleSubmit(event: React.FormEvent): void {
        event.preventDefault();

        dispatch(User_Register_State(Form_data));
    }

    return (
        <div className='h-full w-full flex justify-center content-center'>
            <div>
                {typeof user.userToken === "string" && user.userToken.length > 50 && (
                    <Navigate to="/fitFocus" />
                )}
            </div>
            {/* component */}
            <div className="py-6 flex-1 content-center justify-center ">
                <div className="flex bg-white shadow-2xl overflow-hidden mx-auto mt-[6%] max-w-sm h-[76%] lg:max-w-[68%]">
                    <div
                        className="hidden lg:block lg:w-[50%] bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://play-lh.googleusercontent.com/nfTnY4-TvW5uxOZsz_1SO7Np6DalO3PLU7-z9vZxDhFJqT70OwtT4csw8ZIime1-Aqq6")'
                        }}
                    />
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">
                            Registrate
                        </h2>
                        <p className="text-xl text-gray-600 text-center">Bienvenido a la familia!!</p>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-1"
                                autoComplete="off"
                                placeholder="Alex"
                                value={Form_data.name}
                                onChange={(event) => handleChange(event)}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Correo
                            </label>
                            <input
                                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300-2 px-4 block w-full appearance-none"
                                type="email"
                                name="email"
                                placeholder="Alex@gmail.com"
                                value={Form_data.email}
                                onChange={(event) => handleChange(event)}
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Contraseña
                                </label>
                                <a href="#" className="text-xs text-gray-500">
                                    Recuperar Contraseña
                                </a>
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
                            {user.status?.includes("Password") && (
                                <label className="text-red-500">{user.status}</label>
                            )}
                        </div>
                        <div className="mt-8">
                            <label
                                className="ml-2 mb-[8px] text-sm font-medium text-gray-600 "
                            >
                                Al registrarse, usted está aceptando los terminos y condiciones de la aplicacion
                            </label>
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full :bg-gray-600"
                                onClick={handleSubmit}
                            >
                                {user_logeao.status!=='default' ? (
                                    "Registrarse"
                                ) : (
                                    <span className=" flex justify-center">
                                        <img className="animate-spin w-5 mx-2" src={loading_icon} />
                                        Loading...
                                    </span>
                                )}
                            </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4" />
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">
                                or singUp with google
                            </a>
                            <span className="border-b w-1/5 lg:w-1/4" />
                        </div>
                        <div className="flex justify-center mt-3">
                            <GoogleAuth />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4" />
                            <Link
                                to="/auth/sing-up"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                o inicia sesion
                            </Link>
                            <span className="border-b w-1/5 md:w-1/4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login2



