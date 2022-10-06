import "./styles/Loople.css"
import "./styles/Profile.css"
import Remove from "./Remove"
import Swal from "sweetalert2"
import Progress from "./Progress"
import { RootState } from '../../app/store'
import ProfileDetails from "./ProfileDetails"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector, useToken } from "../../app/hooks"
import { EditUser, getProfileInfo, selectUser, sigendOut } from "../../features/counter/counterSlice"
import Pay from "./Pay"

const Profile = () => {

    const token = useToken();
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const state = useAppSelector(selectUser);
    const imageDefault = useAppSelector((state: RootState) => state.image.image);

    const [styles, setStyles] = useState({
        selected: "profile",
        a: "shadow-soft-2xl rounded-lg bg-white font-semibold text-slate-700",
        div: "bg-gradient-fuchsia",
        path: "fill-slate-800"
    })
    const [hover, setHover] = useState({
        hoverCamera: false,
        hoverUpload: false,
        hoverCancel: false,
        div: "bg-slate-800",
        pathCamera: "fill-white",
        pathUpload: "animate-[bounce_1.2s_ease-in-out_infinite]",
        pathCancel: "animate-[pulse_0.6s_ease-in-out_infinite]",
    })



    const profile = useRef<HTMLAnchorElement | null>(null)
    const logOut = useRef<HTMLAnchorElement | null>(null)
    const progress = useRef<HTMLAnchorElement | null>(null)
    const remove = useRef<HTMLAnchorElement | null>(null)


    // handles
    const handleClickAside = (id: string) => {

        if (id === "logOut") {
            setStyles({ ...styles, selected: "logOut" })
            Swal.fire({
                title: "¿Desea cerrar sesión?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#000000",
                cancelButtonColor: "#d33",
                confirmButtonText: "Cerrar sesión",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(sigendOut(null));
                    navigate("/home");
                    window.location.reload();
                } else setStyles({ ...styles, selected: "profile" })
            })

            
        }
        setStyles({ ...styles, selected: id })

    }

    const handleHover = (enter: boolean, input: string) => {

        if (input === "camera") setHover({ ...hover, hoverCamera: enter })
        else if (input === "upload") setHover({ ...hover, hoverUpload: enter })
        else if (input === "cancel") setHover({ ...hover, hoverCancel: enter })
    }

    const handleClickCancel = () => {
        setImageUrl(imageDefault)
        setHiddenButtons(false)
        setImagePreview(null)
    }

    // Constantes
    const CLOUD_NAME = "dvazw12uq";
    const UPLOAD_PRESET = "nfyapxvy";

    const [imageUrl, setImageUrl] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<File | null>(null)
    const [hiddenButtons, setHiddenButtons] = useState<boolean>(false)

    const handlePreview = ({ target }: any) => {
        const file = target.files[0]
        if (file) {
            setImagePreview(file)
            setHiddenButtons(true)
        }
        else setImagePreview(null)
    }

    const handleClickUpload = async () => {
        const { files }: any = document.querySelector(".app_uploadInput");
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", UPLOAD_PRESET);
        const options = {
            method: "POST",
            body: formData,
        };
        setHiddenButtons(false)

        try {
            const res = await fetch(
                `https://api.Cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                options
            );
            const res_1 = await res.json();
            const data = { avatar: res_1.secure_url }
            dispatch(EditUser({ token, data }))
            setImagePreview(null)
            return;
        } catch (err) {
            return;
        }
    };
    //useEffects

    useEffect(() => {
        if (state.status == "Info changed succesfully") {
            dispatch(getProfileInfo(token))
            Swal.fire({
                title: `Su Perfil fue actualizada correctamente `,
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#6c63ff",
                confirmButtonText: "Aceptar",
            })
        }
    }, [state])

    useEffect(() => {
        if (imagePreview) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImageUrl(reader.result as string)
            }
            reader.readAsDataURL(imagePreview)
        }
    }, [imagePreview])

    useEffect(() => {
        setImageUrl(state.user?.avatar)
    }, [state.user])

    useEffect(() => {
        if (token) {
            dispatch(getProfileInfo(token))
        }
    }, [token])


    return (

        <div className="relative">
            <aside className="max-w-62.5 ease-nav-brand z-990 absolute inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent text-slate-500" id="sidenav-main">
                <hr className="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
                <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full pb-2">
                    <ul className="flex flex-col pl-0 mb-0">
                        <li className="my-0.5 w-full">
                            <a ref={profile} id="profile" onClick={() => handleClickAside("profile")} className={`${styles.selected === "profile" && styles.a} rounded-lg duration-500 py-2.7 text-size-sm ease-nav-brand my-[3px] mx-4 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer sidebar`}>
                                <div onClick={() => handleClickAside("profile")} className={`${styles.selected === "profile" && styles.div} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg  bg-center stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>customer-support</title>
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(1.000000, 0.000000)">
                                                        <path onClick={() => handleClickAside("profile")} className={`${styles.selected !== "profile" && styles.path} duration-500 opacity-60`} d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"></path>
                                                        <path onClick={() => handleClickAside("profile")} className={`${styles.selected !== "profile" && styles.path} duration-500 `} d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                                                        <path onClick={() => handleClickAside("profile")} className={`${styles.selected !== "profile" && styles.path} duration-500 `} d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Perfil</span>
                            </a>
                        </li>
                        {/* <li className="my-0.5 w-full">
                            <a ref={progress} id="progress" onClick={() => handleClickAside("progress")} className={`${styles.selected === "progress" && styles.a} cursor-pointer rounded-lg py-2.7 text-size-sm ease-nav-brand my-[3px] mx-4 flex items-center whitespace-nowrap px-4 transition-colors duration-500 sidebar`}>
                                <div onClick={() => handleClickAside("progress")} className={`${styles.selected === "progress" && styles.div} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>office</title>
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(153.000000, 2.000000)">
                                                        <path onClick={() => handleClickAside("progress")} className={`${styles.selected !== "progress" && styles.path} opacity-60 duration-500`} d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"></path>
                                                        <path onClick={() => handleClickAside("progress")} className={`${styles.selected !== "progress" && styles.path} duration-500`} d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Progreso</span>
                            </a>
                        </li> */}
                        <li className="my-0.5 w-full">
                            <a id="pay" onClick={() => handleClickAside("pay")} className={`${styles.selected === "pay" && styles.a} cursor-pointer rounded-lg py-2.7 text-size-sm ease-nav-brand my-[3px] mx-4 flex items-center whitespace-nowrap px-4 transition-colors duration-500 sidebar`}>
                                <div onClick={() => handleClickAside("pay")} className={`${styles.selected === "pay" && styles.div} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>credit-card</title>
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(453.000000, 454.000000)">
                                                        <path onClick={() => handleClickAside("pay")} className={`${styles.selected !== "pay" && styles.path} opacity-60 duration-500`} d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"></path>
                                                        <path onClick={() => handleClickAside("pay")} className={`${styles.selected !== "pay" && styles.path} duration-500`} d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Mis pagos</span>
                            </a>
                        </li>
                        <li className="cursor-pointer my-0.5 w-full">
                            <a ref={logOut} id="logOut" onClick={() => handleClickAside("logOut")} className={`${styles.selected === "logOut" && styles.a} rounded-lg duration-500 py-2.7 text-size-sm ease-nav-brand my-[3px] mx-4 flex items-center whitespace-nowrap px-4 transition-colors sidebar`}>
                                <div onClick={() => handleClickAside("logOut")} className={`${styles.selected === "logOut" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path onClick={() => handleClickAside("logOut")} className={`${styles.selected === "logOut" && "fill-white"} duration-500`} d="M14 19v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.576-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.424 0 2.774-.302 4-.838v-2.162zm4-9.592l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z" />
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Cerrar Sesion</span>
                            </a>
                        </li>
                        <li className="my-0.5 w-full">
                            <a ref={remove} id="remove" onClick={() => handleClickAside("remove")} className={`${styles.selected === "remove" && styles.a} cursor-pointer rounded-lg duration-500 py-2.7 text-size-sm ease-nav-brand my-[3px] mx-4 flex items-center whitespace-nowrap px-4 transition-colors sidebar`}>
                                <div onClick={() => handleClickAside("remove")} className={`${styles.selected === "remove" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-[7px]`}>
                                    <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><style type="text/css">
                                    </style>
                                        <g>
                                            <g onClick={() => handleClickAside("remove")} className="" id="Icon-Trash" transform="translate(232.000000, 228.000000)">
                                                <polygon className={`${styles.selected === "remove" && "fill-white"} duration-500`} id="Fill-6" points="-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1" />
                                                <polygon className={`${styles.selected === "remove" && "fill-white"} duration-500`} id="Fill-7" points="-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1    " />
                                                <polygon className={`${styles.selected === "remove" && "fill-white"} duration-500`} id="Fill-8" points="-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1    " />
                                                <polygon className={`${styles.selected === "remove" && "fill-white"} opacity-70 duration-500`} id="Fill-9" points="-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1    " />
                                                <path className={`${styles.selected === "remove" && "fill-white"} opacity-70 duration-500`} d="M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3 c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6" id="Fill-10" />
                                                <path className={`${styles.selected === "remove" && "fill-white"} duration-500`} d="M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18 c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1" id="Fill-11" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Desactivar cuenta</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200" id="panel">
                <div className="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
                    <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-clip-border mb-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="flex-none w-auto max-w-full px-3">
                                <div className="text-size-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                    <img src={imageUrl} className="rounded-3xl border-solid app_uploadButton w-[74px] h-[74px] shadow-soft-sm object-cover" />
                                    <div onMouseEnter={() => handleHover(true, "camera")} onMouseLeave={() => handleHover(false, "camera")} className={`${hover.hoverCamera && hover.div} rounded-full absolute hover:duration-500 bottom-0 right-0 bg-white delay-100 duration-500 w-6 h-6 leading-8 overflow-hidden flex justify-center content-center`}>
                                        <input type="file" accept="image/*" onChange={handlePreview} className="app_uploadInput absolute scale-110 opacity-0" />
                                        <svg height="19px" width="19px" className="mt-[2px]" id="Layer_1" enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g>
                                                <path className={`${hover.hoverCamera && hover.pathCamera} duration-500 delay-100 `} d="M430.4,147h-67.5l-40.4-40.8c0,0-0.2-0.2-0.3-0.2l-0.2-0.2v0c-6-6-14.1-9.8-23.3-9.8h-84c-9.8,0-18.5,4.2-24.6,10.9l0,0.1   l-39.5,40H81.6C63,147,48,161.6,48,180.2v202.1c0,18.6,15,33.7,33.6,33.7h348.8c18.5,0,33.6-15.1,33.6-33.7V180.2   C464,161.6,448.9,147,430.4,147z M256,365.5c-50.9,0-92.4-41.6-92.4-92.6c0-51.1,41.5-92.6,92.4-92.6c51,0,92.4,41.5,92.4,92.6   C348.4,323.9,307,365.5,256,365.5z M424.1,200.5c-7.7,0-14-6.3-14-14.1s6.3-14.1,14-14.1c7.7,0,14,6.3,14,14.1   S431.8,200.5,424.1,200.5z" />
                                                <path className={`${hover.hoverCamera && hover.pathCamera} duration-500 delay-100 `} d="M256,202.9c-38.6,0-69.8,31.3-69.8,70c0,38.6,31.2,70,69.8,70c38.5,0,69.8-31.3,69.8-70C325.8,234.2,294.5,202.9,256,202.9   z" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none w-auto max-w-full px-3 my-auto">
                                <div className="h-full">
                                    <h5 className="mb-1">{state.user?.name}</h5>
                                    <p className="mb-0 font-semibold leading-normal text-size-sm"></p>
                                    {
                                        hiddenButtons &&
                                        <div className="w-[200px] flex justify-between">
                                            <div onClick={handleClickUpload} onMouseEnter={() => handleHover(true, "upload")} onMouseLeave={() => handleHover(false, "upload")} className={`bg-white cursor-pointer w-24 pl-2 rounded-2xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.15)] `} >
                                                <svg className={`${hover.hoverUpload && hover.pathUpload} delay-100 w-5 h-5 mb-[3px] inline`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 207.166 207.166" xmlSpace="preserve">
                                                    <g>
                                                        <path className={`duration-300 shadow-xl`} d="M168.353,0H38.813c-4.971,0-9,4.029-9,9s4.029,9,9,9h129.54c4.971,0,9-4.029,9-9S173.324,0,168.353,0z" />
                                                        <path className={` duration-1000 shadow-xl`} d="M109.947,44.028c-3.515-3.515-9.213-3.515-12.728,0L56.886,84.361c-3.515,3.515-3.515,9.213,0,12.728   c3.515,3.516,9.214,3.515,12.728,0l24.97-24.969v126.047c0,4.971,4.029,9,9,9s9-4.029,9-9V72.119l24.97,24.969   c1.757,1.758,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636c3.515-3.515,3.515-9.213,0-12.728L109.947,44.028z" />
                                                    </g>
                                                </svg>
                                                <button className="app_uploadButton">
                                                    Guardar
                                                </button>
                                            </div>
                                            <div onClick={handleClickCancel} onMouseEnter={() => handleHover(true, "cancel")} onMouseLeave={() => handleHover(false, "cancel")} className={`bg-white cursor-pointer w-24 pl-2 rounded-2xl drop-shadow-[0_5px_3px_rgba(0,0,0,0.15)] `} >
                                                <svg className={`${hover.hoverCancel && hover.pathCancel} delay-100 w-4 h-4 mr-0.5 mb-[2px] inline`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" xmlSpace="preserve">
                                                    <polygon className="fill-[#F4B2B0]" points="27.959,164.583 27.959,160.534 172.263,14.827 172.263,164.583 " />
                                                    <g>
                                                        <path className="fill-[#B3404A]" d="M459.181,264.152c-5.593-5.981-14.975-6.295-20.956-0.703c-5.981,5.593-6.295,14.976-0.703,20.956   c20.435,21.854,31.69,50.379,31.69,80.317c0,64.859-52.766,117.623-117.623,117.623c-64.859,0-117.623-52.766-117.623-117.623   s52.765-117.623,117.623-117.623c8.187,0,14.827-6.638,14.827-14.827c0-8.189-6.639-14.827-14.827-14.827   c-81.208,0-147.276,66.068-147.276,147.276c0,14.953,2.248,29.389,6.41,42.997H42.786v-167.54c0-8.189-6.638-14.827-14.827-14.827   s-14.827,6.638-14.827,14.827v182.366c0,8.189,6.638,14.827,14.827,14.827h195.559c25.359,44.53,73.265,74.626,128.072,74.626   c81.208,0,147.276-66.068,147.276-147.276C498.866,327.236,484.772,291.519,459.181,264.152z" />
                                                        <path className="fill-[#B3404A]" d="M394.597,0H172.263c-0.178,0-0.353,0.021-0.529,0.027c-0.172,0.006-0.344,0.013-0.516,0.025   c-0.636,0.044-1.268,0.117-1.889,0.242c-0.021,0.004-0.04,0.012-0.061,0.015c-0.608,0.126-1.202,0.299-1.787,0.5   c-0.159,0.053-0.314,0.111-0.471,0.171c-0.577,0.219-1.143,0.463-1.689,0.752c-0.024,0.013-0.049,0.022-0.073,0.034   c-0.565,0.304-1.103,0.657-1.626,1.033c-0.135,0.098-0.268,0.197-0.4,0.299c-0.519,0.4-1.023,0.824-1.49,1.296L17.428,150.099   c-0.348,0.351-0.676,0.719-0.984,1.1c-0.212,0.261-0.399,0.534-0.59,0.805c-0.086,0.123-0.182,0.239-0.264,0.363   c-0.219,0.331-0.415,0.673-0.603,1.017c-0.042,0.076-0.09,0.147-0.13,0.222c-0.187,0.353-0.35,0.713-0.506,1.078   c-0.033,0.077-0.073,0.151-0.105,0.23c-0.141,0.345-0.259,0.697-0.374,1.048c-0.034,0.107-0.077,0.211-0.11,0.317   c-0.096,0.325-0.172,0.654-0.246,0.984c-0.033,0.142-0.073,0.28-0.101,0.424c-0.059,0.304-0.096,0.609-0.136,0.915   c-0.022,0.173-0.055,0.344-0.073,0.519c-0.028,0.302-0.034,0.605-0.044,0.907c-0.006,0.168-0.025,0.334-0.025,0.501v4.051   c0,8.189,6.638,14.827,14.827,14.827h144.304c8.189,0,14.827-6.638,14.827-14.827V29.653h192.681v143.315   c0,8.189,6.639,14.827,14.827,14.827s14.827-6.638,14.827-14.827V14.827C409.423,6.638,402.786,0,394.597,0z M59.498,149.757   l91.096-91.982l6.842-6.908v98.89H59.498z" />
                                                    </g>
                                                    <polygon className="fill-[#F4B2B0]" points="425.039,404.045 384.233,363.241 425.039,322.435 392.394,289.792 351.59,330.597   310.786,289.792 278.14,322.435 318.946,363.241 278.14,404.045 310.786,436.689 351.59,395.885 392.394,436.689 " />
                                                    <path className="fill-[#B3404A]" d="M392.395,451.515c-3.932,0-7.702-1.563-10.484-4.343l-30.32-30.322l-30.32,30.322  c-5.791,5.788-15.176,5.79-20.969,0l-32.645-32.644c-2.78-2.78-4.343-6.552-4.343-10.484s1.563-7.704,4.343-10.484l30.32-30.32  l-30.32-30.32c-2.78-2.78-4.343-6.552-4.343-10.484c0-3.932,1.563-7.704,4.343-10.484l32.645-32.644  c5.793-5.79,15.178-5.788,20.969,0l30.32,30.322l30.32-30.322c2.781-2.78,6.552-4.343,10.484-4.343s7.704,1.563,10.484,4.343  l32.644,32.644c5.79,5.79,5.79,15.178,0,20.968l-30.32,30.32l30.32,30.32c5.79,5.79,5.79,15.178,0,20.968l-32.644,32.644  C400.099,449.954,396.327,451.515,392.395,451.515z M299.11,404.045l11.676,11.676l30.32-30.322c5.791-5.79,15.176-5.79,20.969,0  l30.32,30.322l11.676-11.676l-30.322-30.32c-5.79-5.79-5.79-15.178,0-20.969l30.322-30.32l-11.676-11.676l-30.32,30.322  c-5.791,5.79-15.176,5.79-20.969,0l-30.32-30.322l-11.676,11.676l30.32,30.32c5.79,5.79,5.79,15.178,0,20.969L299.11,404.045z" />
                                                </svg>
                                                <button className="app_uploadButton">
                                                    Cancelar
                                                </button>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                            </div>
                        </div>
                    </div>
                    {
                        styles.selected === "profile" ? <ProfileDetails name={state.user?.name} email={state.user?.email} plan={state.user?.plan} age={state.user?.userinfo[0]?.age} equipment={state.user?.userinfo[0]?.equipment} experience={state.user?.userinfo[0]?.experience} genre={state.user?.userinfo[0]?.genre} goal={state.user?.userinfo[0]?.goal} height={state.user?.userinfo[0]?.height} weight={state.user?.userinfo[0]?.weight} />
                            /* : styles.selected === "progress" ? <Progress /> */
                                : styles.selected === "remove" ? <Remove />
                                    : styles.selected === "pay" ? <Pay plan={state.user?.plan} />
                                        : styles.selected === "logOut" && <ProfileDetails name={state.user?.name} email={state.user?.email} plan={state.user?.plan} age={state.user?.userinfo[0]?.age} equipment={state.user?.userinfo[0]?.equipment} experience={state.user?.userinfo[0]?.experience} genre={state.user?.userinfo[0]?.genre} goal={state.user?.userinfo[0]?.goal} height={state.user?.userinfo[0]?.height} weight={state.user?.userinfo[0]?.weight} />
                    }
                </div>
                {/* <!-- Footer --> */}
                <footer className="pt-4">
                    <div className="w-full px-6 mx-auto">
                        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                            <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                                <div className="leading-normal text-center text-size-sm text-slate-500 lg:text-left">
                                    © 2022,
                                    Desarrollado por el equipo de<i className="fa fa-heart" aria-hidden="true"></i>
                                    <a href="/contactanos" className="font-semibold text-slate-700"> FIT FOCUS </a>
                                    en Henry
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                                <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                    <li className="nav-item">
                                        <a href="/AboutUs" className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-size-sm text-slate-500">Acerca de nosotros</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Profile;
