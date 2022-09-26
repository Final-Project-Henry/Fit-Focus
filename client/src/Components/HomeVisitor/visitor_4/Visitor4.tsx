import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { exercises } from '../../../additional_info/exercises';


export default function Visitor4() {

    const navigate = useNavigate();
    const onClick = () => {
        navigate('/mercadopago');
    }

    const onClick2 = () => {
        navigate("/auth/sing-up");
    }

    return (
        <div style={{display:'flex', justifyContent: 'center', marginBottom:"20vh"}}>
            <div style={{width: '40vw', display:'flex', flexDirection:'column', alignItems:'center', marginLeft:"5vw"}}>
                <img src={exercises[4].video} width="450px"></img>
                <p style={{backgroundColor: '#111828', color:'white', width:'450px', height:"30px",display:'flex',justifyContent:"center"}}>SENTADILLA</p>
            </div>
            <div className="flex justify-center w-full items-center  h-screen h-[20vh] space-x-5 "
                style={{ marginTop: '5vh', alignItems:"center"}}>
                <div className="p-4 w-full max-w-sm h-[520px]  bg-white rounded-lg border shadow-md sm:p-8   ">
                    <h5 className="mb-4 text-xl font-medium text-gray-500">Gratis!</h5>
                    <div className="flex items-baseline text-gray-900">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">0</span>
                        <span className="ml-1 text-xl font-normal text-gray-500 ">.00</span>
                    </div>
                    <ul role="list" className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal text-gray-500  ">
                                30 ejercicio por mes
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ">
                                calculadora
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Noticias relacionadas
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                               Puntuar ejercicios
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Rutinas personalizadas
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                               Favoritos
                            </span>
                        </li>
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Ejercicios de estiramiento
                            </span>
                        </li>
                    </ul>
                    <button
                        onClick={onClick2}
                        type="button"
                        className="text-white bg-blue-600 hover:bg-blue-700 felx-1 focus:ring-2 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >
                        Empieza Gratis!
                    </button>
                </div>
                <div className="p-4 w-full max-w-sm bg-white h-[520px] rounded-lg border shadow-md sm:p-8   ">
                    <h5 className="mb-4 text-xl font-medium text-gray-500">
                        Pago unico!
                    </h5>
                    <div className="flex items-baseline text-gray-900">
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">
                            3000
                        </span>
                        <span className="ml-1 text-xl font-normal text-gray-500 ">.00</span>
                    </div>
                    <ul role="list" className="my-7 space-y-5">
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal text-gray-500  ">
                                Rutinas personalizadas
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ">
                                Todos los ejercicio desbloqueados
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Calculadora
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Noticias relacionadas
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Favoritos
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Puntuar ejercicios
                            </span>
                        </li>
                        <li className="flex space-x-3">
                            <svg
                                aria-hidden="true"
                                className="flex-shrink-0 w-5 h-5 text-blue-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Check icon</title>
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500">
                                Ejercicios de estiramiento
                            </span>
                        </li>
                    </ul>
                    <button
                        type="button"
                        onClick={onClick}
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-200  font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                    >
                        Hazte Premium ya
                    </button>
                </div>
            </div>
        </div>
    )
}
