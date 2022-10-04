import { current } from "@reduxjs/toolkit"
import { userInfo } from "os"
import { useEffect, useState } from "react"
import ContentEditable from 'react-contenteditable'
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useToken } from "../../app/hooks"
import { EditUser, infoUserRutina, Rutines_Get } from "../../features/counter/counterSlice"
import "./styles/ProfileDetails.css"

interface Props {
    name: string
    email: string
    plan: string
    weight?: number
    age?: number
    height?: number
    equipment?: boolean
    genre?: string
    goal?: string
    experience?: string
}

interface infoUser {
    name: string,
    email: string,
    plan: string
}

interface statusUser {
    weight?: number
    age?: number,
    height?: number,
    equipment?: boolean
    genre?: string
    goal?: string
    experience?: string
}

interface editable {
    info: boolean
    status: boolean
}

const regularExpressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

const ProfileDetails = ({ name, email, plan, age, equipment, experience, genre, goal, height, weight }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const token = useToken()
    const [editable, setEditable] = useState<editable>({
        info: false,
        status: false,
    })
    const [error, setError] = useState<any>({
        name: false,
        email: false,
        weight: false,
        age: false,
        height: false,
    })
    const [infoUser, setInfoUser] = useState<infoUser>({
        name: name,
        email: email,
        plan: plan,
    })

    const [statusUser, setStatusUser] = useState<statusUser>({
        age: age,
        equipment: equipment,
        experience: experience,
        genre: genre,
        goal: goal,
        height: height,
        weight: weight
    })

    /* Handles */

    const handleChangeInfo = (e: any) => {
        const { target, currentTarget }: any = e

        setInfoUser({
            ...infoUser,
            [currentTarget.id]: target.value
        })

        currentTarget.id === "name" && error && setError({ ...error, name: false })
        currentTarget.id === "email" && error && setError({ ...error, email: false })
    }

    const handleChangeStatus = ({ target, currentTarget }: any) => {
        const value = target.value
        const type = currentTarget.id
        const select = target.name

        if (!isNaN(value))
            setStatusUser({
                ...statusUser,
                [type]: Number(target.value)
            })
        else if (select)
            setStatusUser({
                ...statusUser,
                [select]: value
            })
        else setStatusUser({ ...statusUser })

        error[type] && setError({ ...error, [type]: false })
    }

    const handleClickInfoUser = (type: string) => {

        if (type === "cancel") {
            setEditable({ ...editable, info: false })
            setInfoUser({ ...infoUser, name, email, plan })
            return setError({ name: false, email: false })
        }



        if (infoUser.name.length < 3) return setError({ ...error, name: true })
        if (infoUser.email.match(regularExpressionEmail)) {
            dispatch(EditUser({ token, data: infoUser }))
            setEditable({ ...editable, info: false })
        }
        else setError({ ...error, email: true })
    }

    const handleClickStateUser = async (type: string) => {
        if (type === "cancel") {
            setEditable({ ...editable, status: false })
            setStatusUser({ ...statusUser, age, height, weight, experience, equipment, goal, genre })
            return setError({ weight: false, age: false, height: false })
        }

        if (statusUser.age && statusUser.age < 20 || statusUser.age && statusUser.age > 66 || statusUser?.age === 0) return setError({ ...error, age: true })
        else if (statusUser.height && statusUser.height < 120 || statusUser.height && statusUser.height > 220 || statusUser?.height === 0) return setError({ ...error, height: true })
        else if (statusUser.weight && statusUser.weight < 20 || statusUser.weight && statusUser.weight > 120 || statusUser?.weight === 0) return setError({ ...error, weight: true })
        else {
            await dispatch(infoUserRutina({ token, form_data: statusUser }));
            await dispatch(EditUser({ token, data: statusUser }))
            await dispatch(Rutines_Get( {token,cualqu:true}));

            setEditable({ ...editable, status: false })
        }
    }

    const handleClickEditable = (type: any) => {
        setEditable({ ...editable, [type]: true })
    }

    useEffect(() => {
        setInfoUser({ ...infoUser, name, email, plan })
        setStatusUser({ ...infoUser, age, equipment, experience, genre, goal, height, weight })
    }, [name, email, plan, age, equipment, experience, genre, goal, height, weight])

    return (
        <div className="w-full p-3 mt-6 mx-auto removable">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-auto mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-auto md:flex-none">
                                    <h6 className="mb-0 font-bold text-xl">{editable.info ? "Editar usuario" : "Detalles del usuario"}</h6>
                                </div>
                                <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                                    <a data-target="tooltip_trigger" data-placement="top">
                                        <i className="leading-normal fas fa-user-edit text-size-sm text-slate-400" aria-hidden="true"></i>
                                    </a>
                                </div>
                                {editable.info ?
                                    <div>
                                        {/* Save */}
                                        <svg id="save" onClick={() => handleClickInfoUser("save")} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer absolute right-11 top-2.5 w-6 h-6 pt-0.5 mt-[1px] hover:drop-shadow-[0_4px_1px_rgba(0,200,0,0.4)] hover:duration-500 hover:scale-110 hover:stroke-green-500 delay-100 duration-500" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                            <path id="save" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                                            <polyline id="save" points="17 21 17 13 7 13 7 21" />
                                            <polyline id="save" points="7 3 7 8 15 8" />
                                        </svg>
                                        {/* Cancel */}
                                        <svg id="cancel" onClick={() => handleClickInfoUser("cancel")} xmlns="http://www.w3.org/2000/svg" className="fill-black hover:scale-110 hover:fill-red-600 hover:duration-500 duration-500 cursor-pointer absolute right-1.5 top-1.5 w-9 h-9 hover:drop-shadow-[0_4px_1px_rgba(200,0,0,0.4)]" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" version="1.1" baseProfile="full" xmlSpace="preserve">
                                            <path id="cancel" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 38,19C 48.4934,19 57,27.5066 57,38C 57,48.4934 48.4934,57 38,57C 27.5066,57 19,48.4934 19,38C 19,27.5066 27.5066,19 38,19 Z M 38,23.75C 35.2116,23.75 32.6102,24.5509 30.4134,25.9352L 50.0648,45.5866C 51.4491,43.3898 52.25,40.7884 52.25,38C 52.25,30.13 45.87,23.75 38,23.75 Z M 23.75,38C 23.75,45.8701 30.1299,52.25 38,52.25C 40.7884,52.25 43.3897,51.4491 45.5865,50.0649L 25.9351,30.4136C 24.5509,32.6103 23.75,35.2117 23.75,38 Z " />
                                        </svg>
                                    </div>
                                    :
                                    <svg onClick={() => handleClickEditable("info")} className="w-5 h-5 right-3 top-3 absolute cursor-pointer hover:scale-110 hover:duration-500 duration-500 delay-100 hover:drop-shadow-[0_3px_1px_rgba(0,0,200,0.3)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 489.7 489.7" xmlSpace="preserve">
                                        {/* Edit */}
                                        <g>
                                            <g>
                                                <path onClick={() => handleClickEditable("info")} className="fill-red-500 " d="M461.9,145.905l11.5-11.3l2.9-2.8l1.4-1.4c0.6-0.6,1.6-1.6,2.4-2.5c3.3-3.7,6.4-8.9,8-14.1c0.9-2.9,1.4-6.1,1.5-9.1    l0.1-3.8c0-1-0.2-1.9-0.6-2.9c-1.1-2.4-2.6-5.9-4.4-9.3c-1.8-3.5-4-6.8-5.6-8.4c-0.5-0.6-1-1.1-1.5-1.4c-0.4-0.3-0.8-0.4-1.1-0.5    c-0.7-0.2-1.3-0.1-1.8,0.1c-1,0.6-1.7,1.6-1.8,4.1c-0.5,4.4-1.1,10.9-1.1,18.1c0,0.5,0,1,0,1.5v0.6c-0.9,3.1-2.3,6.1-4.3,8.4    c-2,2.4-4.5,4-7.1,5.8c-5.2,3.6-10.4,7.4-15.6,11.4c-10.5,7.9-21.1,16.3-31.7,25.2c-21.3,17.7-42.8,37.2-63.8,57.4    c-25.7,24.6-51.3,49.1-77,73.7l-38.9,37.2l-9.6,9.3l-2.2,2.1c0,0-0.2,0.1-0.3,0.1l-0.6,0.1l-25.4,4.9    c-17.5,3.5-34.9,6.9-52.4,10.4l-8.4,1.7c3.4-16.5,6.9-33.1,10.3-49.6l5.2-26.3l1.3-6.6l0.6-3.3l0.1-0.4v-0.2v-0.1    c0.1-0.4-0.1,0.5-0.1,0.3s0.2-0.8,0.1-0.4c-0.2,0.6-0.1,0.3-0.1,0.4c-0.1,0,0.2-0.5,0.2-0.6l0,0l0,0l0.3-0.3l1.2-1.2l2.3-2.4    c12.7-12.3,25.5-24.5,38.2-36.8c40.1-39.1,80.2-78.4,119.7-118.1c19.7-19.9,39.3-39.9,58.7-60l7.3-7.6c1.2-1.3,1.9-2,2.3-2.4h0.3    c3.4,0.3,6.2,0.6,8.4,1.1c1.1,0.2,2,0.4,2.7,0.7h0.1c-0.2-0.1,0.4,0.2-0.3-0.1h0.1l0.2,0.1l0.6,0.2l1.2,0.5l2.4,1    c3,1.3,5.1,2.2,7.9,3.6c5.3,2.7,10.3,5.8,15.1,9.4c21.6,15.9,33.9,37.8,41.7,32.1c3.3-2.6,4.3-9.9,1.1-20.4    c-3.2-10.4-10.9-24.2-24.9-36.1c-6.2-5.3-13-10-20.1-14c-1.8-1-3.8-2-5.6-3c-2-1.1-3.4-1.6-5.2-2.5l-1.2-0.6l-1-0.5l-0.9-0.4    c-1.2-0.5-2.4-0.9-3.6-1.3c-2.4-0.7-4.6-1.3-6.8-1.7c-2.1-0.4-4.2-0.8-6.1-1.1l-2.8-0.4l-1.6-0.2c-0.9-0.1-1.8-0.2-2.7-0.2    c-3.6-0.1-7.6,0.5-11.1,1.8s-6.5,3.1-8.8,5c-0.6,0.4-1.2,1-1.9,1.6l-1.4,1.3l-2,1.9l-4,3.8l-8,7.6c-21.2,20.3-42.3,40.9-63,61.7    c-33.3,33.6-66.2,67.3-99.1,101.3l-49.2,50.9l-3.2,3.3c-1.8,1.9-3.3,3.9-4.6,6c-1.2,2.1-2.3,4.3-3.1,6.9c-1,3.4-0.9,4.1-1.3,5.7    l-3.4,17.4l-6.9,34.7c-2.8,10.2-5.7,20.4-8.5,30.7l-2.1,7.7l-1,3.9l-0.5,1.9c-0.2,1-0.6,2.7-0.7,4.1c-0.6,5.9,1,13.5,6,19.2    c2.4,2.8,5.6,5.1,8.9,6.5s6.7,2.1,10.1,2.2c1,0,2,0,3-0.1l1.6-0.2l0.5-0.1l1.4-0.2l1-0.2l3.9-0.7l7.9-1.3l15.7-2.7    c10.5-1.9,21-3.8,31.5-5.7c10.5-2,21-4,31.5-6l7.9-1.5c4.6-0.9,10-3,14.5-6.1c1.1-0.8,2.2-1.6,3.1-2.4l1.6-1.4l0.9-0.9l2.9-2.8    l5.7-5.6c15.2-15.1,30.5-30.1,45.7-45.2c30.3-30.4,60.6-60.9,90.9-91.3c15.2-15.2,30.4-30.4,45.5-45.5L461.9,145.905z     M380.6,34.805L380.6,34.805c-0.3,0-0.6,0-0.7-0.1L380.6,34.805z M121,353.305c-0.5,0.1,0.1,0,0.4-0.1c0.1,0,0.1,0,0.2,0    L121,353.305z" />
                                                <path onClick={() => handleClickEditable("info")} d="M400.9,282.405c-4.9-7.7-9,2.3-12.1,17.3c-5.2,24.7-8.9,52-11.4,80.8c-1.3,14.4-2.3,29.2-3,44.1    c-0.2,3.7-0.3,7.5-0.5,11.3l-0.2,5.7v0.7v0.4c0-0.3,0,0.7,0-0.6l0,0v0.1v0.2l-0.1,1.4c-0.1,1.3-0.2,1-0.3,1.3    c-0.8,3.3-3.4,6.5-6.5,8.1c-2,1-3.8,1.4-6.4,1.3l-13.8-0.3l-27.5-0.6l-55.1-1.2c-36.7-0.7-73.5-1.3-110.2-2    c-36.8-0.5-73.6-0.9-110.4-0.9H43h-0.4l-1.7-0.1c-0.1-0.2,0.5,0,0-0.1c-0.6-0.1-1.1-0.4-1.7-0.6c-1-0.6-2.1-1.5-2.7-2.5    c-0.7-1-1-2.2-1.1-3.5l-0.2-13.8c-0.2-18.4-0.5-36.9-0.9-55.4c0.4-18.3,0.7-36.5,1.1-54.8c0.8-58,1.4-115.9,1.2-173.8l-0.1-20.7    c0-2,0.7-3.3,2-4.6c0.6-0.6,1.4-1,2.2-1.3c0.4-0.1,0.8-0.2,1.3-0.3c0.1,0,0.2,0,0.3,0c0,0,0.8,0,1.1,0h2.7l21.7-0.3    c28.9-0.5,57.8-1.2,86.6-2.3c32.8-1.2,60-5.8,57.6-14.8c-2.2-8.3-25.5-14.4-59.1-15.3c-30.2-0.8-60.6-1.6-91-2.4l-11.4-0.2    l-5.7-0.1c-1.1,0-1.7-0.1-3.1,0c-1.5,0.1-3.1,0.1-4.6,0.3c-12.3,1.4-23.8,8.5-30.5,18.9c-1.7,2.6-3.1,5.4-4.1,8.3    c-1.1,3-1.8,5.7-2.3,9.7l-0.1,1.3v0.7l-0.1,1.4v1.5v0.7v1.4v5.7v22.8c0.2,48.8,0.8,97.6,1.5,146.4l1.1,73.2l0.6,36.6l0.3,18.3    l0.1,9.1v2.3c0,0.8,0,1.3,0.1,2.6c0.1,2.3,0.4,4.5,0.8,6.8c1.3,8.1,5.3,15.9,11.3,21.7c3,2.9,6.5,5.5,10.3,7.3    c3.9,1.8,7.6,3.1,13,3.8l2,0.2l0.5,0.1h1.3l1,0.1l4.1,0.2l8.2,0.4l16.5,0.7c22,0.9,44,1.6,66,2.1c44.1,1,88.4,1.4,132.7,1.4    c22.2,0,44.4-0.1,66.5-0.1l16.6-0.1h4.2h2.3l3.6-0.2c4.9-0.5,9.7-1.7,14.2-3.6c9-4,16.6-10.8,21.4-19.3c2.4-4.3,4.1-8.8,5.1-13.7    c0.3-1.5,0.5-2.9,0.6-4.4c0.1-0.9,0.1-1.1,0.1-1.5v-1l0.1-2v-1v-2.1c-0.1-44.4-0.1-88.7,0.5-132.9    C406.9,298.705,403.4,286.305,400.9,282.405z" />
                                            </g>
                                        </g>
                                    </svg>
                                }
                            </div>
                        </div>
                        <div className="flex-auto p-4">
                            <hr className="h-px my-2 bg-transparent bg-gradient-horizontal-light" />
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                                    <strong className="text-slate-700 mr-0.5">
                                        {editable.info ? "Editar nombre:" : "Nombre:"}
                                    </strong>
                                    <ContentEditable id="name" html={infoUser.name !== undefined ? infoUser.name : "Cargando..."} onChange={handleChangeInfo} disabled={!editable.info} spellCheck={false} className={`${error.name && "border-b-2 border-red-400 hover:border-red-500 focus:border-red-600"} ${editable.info && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100  rounded-b-lg outline-none px-2 inline`} />
                                </li>
                                {/*  */}
                                <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-base text-inherit">
                                    <strong className="text-slate-700 mr-0.5">
                                        {editable.info ? "Editar correo:" : "Correo:"}
                                    </strong>
                                    <ContentEditable id="email" html={infoUser.email !== undefined ? infoUser.email : "Cargando..."} onChange={handleChangeInfo} disabled={!editable.info} spellCheck={false} className={`${error.email && "border-b-2 border-red-400 hover:border-red-500 focus:border-red-600"} ${editable.info && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline`} />
                                </li>
                                {/*  */}
                                <li className={`relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-base text-inherit `}>
                                    <strong className="text-slate-700 mr-2">{editable.info && plan === "normal" ? "Mejora tu plan:" : "Tipo de plan:"}</strong>
                                    <span className={`font-semibold ${plan === "normal" ? "text-[#46b357]" : plan === "premium" && "text-[#efb810]"}`}>
                                        {infoUser.plan ? infoUser.plan : "Cargando..."}
                                    </span>
                                    {editable.info && plan === "normal" &&
                                        <button onClick={() => navigate("/mercadopago")} className="bg-transparent hover:text-[#efb810] font-semibold ml-3 py-0.5 px-1.5 border border-[#efb810] duration-500 hover:border-transparent rounded">
                                            Conviertete en premium
                                        </button>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Informacion corporal */}
                {statusUser?.genre ?
                    <div className={`w-full max-w-full px-3 lg-max:mt-6 lg-max ${editable.status ? "w-auto" : "xl:w-4/12"} mb-4`}>
                        <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                        <h6 className="mb-0 font-bold text-xl">{editable.status ? "Editar perfil" : "Detalles del perfil"}</h6>
                                    </div>
                                    <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                                        <a data-target="tooltip_trigger" data-placement="top">
                                            <i className="leading-normal fas fa-user-edit text-size-sm text-slate-400" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                    {editable.status ?
                                        <div>
                                            {/* Save */}
                                            <svg onClick={() => handleClickStateUser("save")} className="cursor-pointer absolute right-11 top-2.5 w-6 h-6 pt-0.5 mt-[1px] hover:drop-shadow-[0_4px_1px_rgba(0,200,0,0.4)] hover:duration-500 hover:scale-110 hover:stroke-green-500 delay-100 duration-500" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                                <path id="save" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                                                <polyline id="save" points="17 21 17 13 7 13 7 21" />
                                                <polyline id="save" points="7 3 7 8 15 8" />
                                            </svg>
                                            {/* Cancel */}
                                            <svg onClick={() => handleClickStateUser("cancel")} xmlns="http://www.w3.org/2000/svg" className="fill-black hover:scale-110 hover:fill-red-600 hover:duration-500 duration-500 cursor-pointer absolute right-1.5 top-1.5 w-9 h-9 hover:drop-shadow-[0_4px_1px_rgba(200,0,0,0.4)]" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" version="1.1" baseProfile="full" xmlSpace="preserve">
                                                <path id="cancel" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 38,19C 48.4934,19 57,27.5066 57,38C 57,48.4934 48.4934,57 38,57C 27.5066,57 19,48.4934 19,38C 19,27.5066 27.5066,19 38,19 Z M 38,23.75C 35.2116,23.75 32.6102,24.5509 30.4134,25.9352L 50.0648,45.5866C 51.4491,43.3898 52.25,40.7884 52.25,38C 52.25,30.13 45.87,23.75 38,23.75 Z M 23.75,38C 23.75,45.8701 30.1299,52.25 38,52.25C 40.7884,52.25 43.3897,51.4491 45.5865,50.0649L 25.9351,30.4136C 24.5509,32.6103 23.75,35.2117 23.75,38 Z " />
                                            </svg>
                                        </div>
                                        :
                                        <svg onClick={() => handleClickEditable("status")} className="w-5 h-5 right-3 top-3 absolute cursor-pointer hover:scale-110 hover:duration-500 duration-500 delay-100 hover:drop-shadow-[0_3px_1px_rgba(0,0,200,0.3)]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 489.7 489.7" xmlSpace="preserve">
                                            {/* Edit */}
                                            <g>
                                                <g>
                                                    <path onClick={() => handleClickEditable("status")} className="fill-red-500 " d="M461.9,145.905l11.5-11.3l2.9-2.8l1.4-1.4c0.6-0.6,1.6-1.6,2.4-2.5c3.3-3.7,6.4-8.9,8-14.1c0.9-2.9,1.4-6.1,1.5-9.1    l0.1-3.8c0-1-0.2-1.9-0.6-2.9c-1.1-2.4-2.6-5.9-4.4-9.3c-1.8-3.5-4-6.8-5.6-8.4c-0.5-0.6-1-1.1-1.5-1.4c-0.4-0.3-0.8-0.4-1.1-0.5    c-0.7-0.2-1.3-0.1-1.8,0.1c-1,0.6-1.7,1.6-1.8,4.1c-0.5,4.4-1.1,10.9-1.1,18.1c0,0.5,0,1,0,1.5v0.6c-0.9,3.1-2.3,6.1-4.3,8.4    c-2,2.4-4.5,4-7.1,5.8c-5.2,3.6-10.4,7.4-15.6,11.4c-10.5,7.9-21.1,16.3-31.7,25.2c-21.3,17.7-42.8,37.2-63.8,57.4    c-25.7,24.6-51.3,49.1-77,73.7l-38.9,37.2l-9.6,9.3l-2.2,2.1c0,0-0.2,0.1-0.3,0.1l-0.6,0.1l-25.4,4.9    c-17.5,3.5-34.9,6.9-52.4,10.4l-8.4,1.7c3.4-16.5,6.9-33.1,10.3-49.6l5.2-26.3l1.3-6.6l0.6-3.3l0.1-0.4v-0.2v-0.1    c0.1-0.4-0.1,0.5-0.1,0.3s0.2-0.8,0.1-0.4c-0.2,0.6-0.1,0.3-0.1,0.4c-0.1,0,0.2-0.5,0.2-0.6l0,0l0,0l0.3-0.3l1.2-1.2l2.3-2.4    c12.7-12.3,25.5-24.5,38.2-36.8c40.1-39.1,80.2-78.4,119.7-118.1c19.7-19.9,39.3-39.9,58.7-60l7.3-7.6c1.2-1.3,1.9-2,2.3-2.4h0.3    c3.4,0.3,6.2,0.6,8.4,1.1c1.1,0.2,2,0.4,2.7,0.7h0.1c-0.2-0.1,0.4,0.2-0.3-0.1h0.1l0.2,0.1l0.6,0.2l1.2,0.5l2.4,1    c3,1.3,5.1,2.2,7.9,3.6c5.3,2.7,10.3,5.8,15.1,9.4c21.6,15.9,33.9,37.8,41.7,32.1c3.3-2.6,4.3-9.9,1.1-20.4    c-3.2-10.4-10.9-24.2-24.9-36.1c-6.2-5.3-13-10-20.1-14c-1.8-1-3.8-2-5.6-3c-2-1.1-3.4-1.6-5.2-2.5l-1.2-0.6l-1-0.5l-0.9-0.4    c-1.2-0.5-2.4-0.9-3.6-1.3c-2.4-0.7-4.6-1.3-6.8-1.7c-2.1-0.4-4.2-0.8-6.1-1.1l-2.8-0.4l-1.6-0.2c-0.9-0.1-1.8-0.2-2.7-0.2    c-3.6-0.1-7.6,0.5-11.1,1.8s-6.5,3.1-8.8,5c-0.6,0.4-1.2,1-1.9,1.6l-1.4,1.3l-2,1.9l-4,3.8l-8,7.6c-21.2,20.3-42.3,40.9-63,61.7    c-33.3,33.6-66.2,67.3-99.1,101.3l-49.2,50.9l-3.2,3.3c-1.8,1.9-3.3,3.9-4.6,6c-1.2,2.1-2.3,4.3-3.1,6.9c-1,3.4-0.9,4.1-1.3,5.7    l-3.4,17.4l-6.9,34.7c-2.8,10.2-5.7,20.4-8.5,30.7l-2.1,7.7l-1,3.9l-0.5,1.9c-0.2,1-0.6,2.7-0.7,4.1c-0.6,5.9,1,13.5,6,19.2    c2.4,2.8,5.6,5.1,8.9,6.5s6.7,2.1,10.1,2.2c1,0,2,0,3-0.1l1.6-0.2l0.5-0.1l1.4-0.2l1-0.2l3.9-0.7l7.9-1.3l15.7-2.7    c10.5-1.9,21-3.8,31.5-5.7c10.5-2,21-4,31.5-6l7.9-1.5c4.6-0.9,10-3,14.5-6.1c1.1-0.8,2.2-1.6,3.1-2.4l1.6-1.4l0.9-0.9l2.9-2.8    l5.7-5.6c15.2-15.1,30.5-30.1,45.7-45.2c30.3-30.4,60.6-60.9,90.9-91.3c15.2-15.2,30.4-30.4,45.5-45.5L461.9,145.905z     M380.6,34.805L380.6,34.805c-0.3,0-0.6,0-0.7-0.1L380.6,34.805z M121,353.305c-0.5,0.1,0.1,0,0.4-0.1c0.1,0,0.1,0,0.2,0    L121,353.305z" />
                                                    <path onClick={() => handleClickEditable("status")} d="M400.9,282.405c-4.9-7.7-9,2.3-12.1,17.3c-5.2,24.7-8.9,52-11.4,80.8c-1.3,14.4-2.3,29.2-3,44.1    c-0.2,3.7-0.3,7.5-0.5,11.3l-0.2,5.7v0.7v0.4c0-0.3,0,0.7,0-0.6l0,0v0.1v0.2l-0.1,1.4c-0.1,1.3-0.2,1-0.3,1.3    c-0.8,3.3-3.4,6.5-6.5,8.1c-2,1-3.8,1.4-6.4,1.3l-13.8-0.3l-27.5-0.6l-55.1-1.2c-36.7-0.7-73.5-1.3-110.2-2    c-36.8-0.5-73.6-0.9-110.4-0.9H43h-0.4l-1.7-0.1c-0.1-0.2,0.5,0,0-0.1c-0.6-0.1-1.1-0.4-1.7-0.6c-1-0.6-2.1-1.5-2.7-2.5    c-0.7-1-1-2.2-1.1-3.5l-0.2-13.8c-0.2-18.4-0.5-36.9-0.9-55.4c0.4-18.3,0.7-36.5,1.1-54.8c0.8-58,1.4-115.9,1.2-173.8l-0.1-20.7    c0-2,0.7-3.3,2-4.6c0.6-0.6,1.4-1,2.2-1.3c0.4-0.1,0.8-0.2,1.3-0.3c0.1,0,0.2,0,0.3,0c0,0,0.8,0,1.1,0h2.7l21.7-0.3    c28.9-0.5,57.8-1.2,86.6-2.3c32.8-1.2,60-5.8,57.6-14.8c-2.2-8.3-25.5-14.4-59.1-15.3c-30.2-0.8-60.6-1.6-91-2.4l-11.4-0.2    l-5.7-0.1c-1.1,0-1.7-0.1-3.1,0c-1.5,0.1-3.1,0.1-4.6,0.3c-12.3,1.4-23.8,8.5-30.5,18.9c-1.7,2.6-3.1,5.4-4.1,8.3    c-1.1,3-1.8,5.7-2.3,9.7l-0.1,1.3v0.7l-0.1,1.4v1.5v0.7v1.4v5.7v22.8c0.2,48.8,0.8,97.6,1.5,146.4l1.1,73.2l0.6,36.6l0.3,18.3    l0.1,9.1v2.3c0,0.8,0,1.3,0.1,2.6c0.1,2.3,0.4,4.5,0.8,6.8c1.3,8.1,5.3,15.9,11.3,21.7c3,2.9,6.5,5.5,10.3,7.3    c3.9,1.8,7.6,3.1,13,3.8l2,0.2l0.5,0.1h1.3l1,0.1l4.1,0.2l8.2,0.4l16.5,0.7c22,0.9,44,1.6,66,2.1c44.1,1,88.4,1.4,132.7,1.4    c22.2,0,44.4-0.1,66.5-0.1l16.6-0.1h4.2h2.3l3.6-0.2c4.9-0.5,9.7-1.7,14.2-3.6c9-4,16.6-10.8,21.4-19.3c2.4-4.3,4.1-8.8,5.1-13.7    c0.3-1.5,0.5-2.9,0.6-4.4c0.1-0.9,0.1-1.1,0.1-1.5v-1l0.1-2v-1v-2.1c-0.1-44.4-0.1-88.7,0.5-132.9    C406.9,298.705,403.4,286.305,400.9,282.405z" />
                                                </g>
                                            </g>
                                        </svg>
                                    }
                                </div>
                            </div>
                            {/* Segunda Card */}
                            <div className="flex-auto p-4">
                                <hr className="h-px my-2 bg-transparent bg-gradient-horizontal-light" />
                                <ul className="grid grid-flow-row grid-cols-2 pl-0 mb-0 rounded-lg">
                                    <li className="relative block px-4 pb-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar peso:" : "Peso:"}
                                        </strong>
                                        <ContentEditable id="weight" html={statusUser.weight !== undefined ? String(statusUser.weight) : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${error.weight && "border-b-2 border-red-400 hover:border-red-500 focus:border-red-600"} ${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline`} />
                                        {statusUser.weight !== undefined && <span className={`${editable.status && "ml-1 text-gray-400 duration-500"} ml-0`}>kg</span>}
                                    </li>
                                    {/*  */}
                                    <li className="relative block px-4 pb-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar edad:" : "Edad:"}
                                        </strong>
                                        <ContentEditable id="age" html={statusUser.age !== undefined ? String(statusUser.age) : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${error.age && "border-b-2 border-red-400 hover:border-red-500 focus:border-red-600"} ${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline`} />
                                        {statusUser.weight !== undefined && <span className={`${editable.status && "ml-1 text-gray-400 duration-500"} ml-0`}>años</span>}
                                    </li>
                                    {/*  */}
                                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar altura:" : "Altura:"}
                                        </strong>
                                        <ContentEditable id="height" html={statusUser.height !== undefined ? String(statusUser.height) : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${error.height && "border-b-2 border-red-400 hover:border-red-500 focus:border-red-600"} ${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline focus:border-blue-600`} />
                                        {statusUser.weight !== undefined && <span className={`${editable.status && "ml-1 text-gray-400 duration-500"} ml-0`}>cm</span>}
                                    </li>
                                    {/*  */}
                                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar equipo:" : "Equipo:"}
                                        </strong>
                                        {
                                            editable.status
                                                ? <select onChange={handleChangeStatus} className="inline h-6 pr-8 pl-1.5 py-0 border-0 border-b-[1px] rounded-b-lg" name="equipment" id="select">
                                                    <option value="true">Si</option>
                                                    <option value="false">No</option>
                                                </select>
                                                : <ContentEditable id="equipment" html={statusUser.equipment !== undefined ? String(statusUser.equipment) : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline `} />
                                        }
                                    </li>
                                    {/*  */}
                                    <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar Genero:" : "Genero:"}
                                        </strong>
                                        {
                                            editable.status
                                                ? <select onChange={handleChangeStatus} className="" name="genre" id="select">
                                                    <option value="man">Masculino</option>
                                                    <option value="woman">Femenino</option>
                                                </select>
                                                : <ContentEditable id="genre" html={statusUser.genre !== undefined ? statusUser.genre : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline`} />
                                        }
                                    </li>
                                    {/*  */}
                                    <li className="relative block px-4 pt-2 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar objetivo:" : "Objetivo:"}
                                        </strong>
                                        {
                                            editable.status
                                                ? <select onChange={handleChangeStatus} name="goal" id="select">
                                                    <option value="lower fat percentage">Perder peso</option>
                                                    <option value="gain muscles">Ganar musculos</option>
                                                </select>
                                                : <ContentEditable id="equipmet" html={statusUser.goal !== undefined ? statusUser.goal : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline`} />
                                        }
                                    </li>
                                    {/*  */}
                                    <li className="relative block px-4 pb-2 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                                        <strong className="text-slate-700 mr-0.5">
                                            {editable.status ? "Editar experiencia:" : "Experiencia:"}
                                        </strong>
                                        {
                                            editable.status
                                                ? <select onChange={handleChangeStatus} name="experience" id="select">
                                                    <option value="beginner">Principiante</option>
                                                    <option value="intermediate">Intermedio</option>
                                                    <option value="advanced">Avanzado</option>
                                                </select>
                                                : <ContentEditable id="experience" html={statusUser.experience !== undefined ? statusUser.experience : "Cargando..."} onChange={handleChangeStatus} disabled={!editable.status} spellCheck={false} className={`${editable.status && "border-b-2 border-gray-200 hover:border-gray-500 focus:border-blue-600"}  duration-500 delay-100 rounded-b-lg outline-none px-2 inline`} />
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default ProfileDetails