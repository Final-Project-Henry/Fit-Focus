import "./styles/Profile.css"
import "./styles/Loople.css"
import { useRef, useState } from "react"
import { useAppDispatch, useSesion, useToken } from "../../app/hooks"
import ProfileDetails from "./ProfileDetails"
import imgProfile from "../assets/Profile-media/IMG-20220914-WA0007.jpg"
import Swal from "sweetalert2"
import { sigendOut } from "../../features/counter/counterSlice"
import Remove from "./Remove"
import Progress from "./Progress"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const [styles, setStyles] = useState({
        selected: "profile",
        a: "shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700",
        div: "bg-gradient-fuchsia",
        path: "fill-slate-800"
    })
    const { name } = useSesion();




    const profile = useRef<HTMLAnchorElement | null>(null)
    const logOut = useRef<HTMLAnchorElement | null>(null)
    const progress = useRef<HTMLAnchorElement | null>(null)
    const remove = useRef<HTMLAnchorElement | null>(null)

    const handleClickAside = ({ target }: any) => {

        if (target.id === "profile") setStyles({ ...styles, selected: "profile" })

        else if (target.id === "logOut") {
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

        else if (target.id === "progress") setStyles({ ...styles, selected: "progress" })
        else if (target.id === "remove") setStyles({ ...styles, selected: "remove" })
        else if (target.id === "billing") setStyles({ ...styles, selected: "billing" })

    }



    return (
        <div className="relative">
            <aside className="max-w-62.5 ease-nav-brand z-990 absolute inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent text-slate-500" id="sidenav-main">
                <hr className="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
                <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full pb-2">
                    <ul className="flex flex-col pl-0 mb-0">
                        <li className="mt-0.5 w-full">
                            <a ref={profile} id="profile" onClick={handleClickAside} className={`${styles.selected === "profile" && styles.a} duration-500 py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer`}>
                                <div onClick={() => handleClickAside({ target: { id: "profile" } })} className={`${styles.selected === "profile" && styles.div} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>customer-support</title>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(1.000000, 0.000000)">
                                                        <path className={`${styles.selected !== "profile" && styles.path} duration-500 opacity-60`} d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"></path>
                                                        <path className={`${styles.selected !== "profile" && styles.path} duration-500 `} d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                                                        <path className={`${styles.selected !== "profile" && styles.path} duration-500 `} d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Perfil</span>
                            </a>
                        </li>
                        <li className="mt-0.5 w-full">
                            <a ref={progress} id="progress" onClick={handleClickAside} className={`${styles.selected === "progress" && styles.a} py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors duration-500`} href="javascript:;">
                                <div onClick={() => handleClickAside({ target: { id: "progress" } })} className={`${styles.selected === "progress" && styles.div} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>office</title>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(153.000000, 2.000000)">
                                                        <path className={`${styles.selected !== "progress" && styles.path} opacity-60 duration-500`} d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"></path>
                                                        <path className={`${styles.selected !== "progress" && styles.path} duration-500`} d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Progreso</span>
                            </a>
                        </li>
                        <li className="mt-0.5 w-full">
                            <a id="billing" onClick={handleClickAside} className={`${styles.selected === "billing" && styles.a} py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors duration-500`} href="javascript:;">
                                <div onClick={() => handleClickAside({ target: { id: "billing" } })} className={`${styles.selected === "billing" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>credit-card</title>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(453.000000, 454.000000)">
                                                        <path className={`${styles.selected !== "billing" && styles.path} duration-500 opacity-60`} d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"></path>
                                                        <path className={`${styles.selected !== "billing" && styles.path} duration-500`} d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Billing</span>
                            </a>
                        </li>
                        <li className="mt-0.5 w-full">
                            <a ref={logOut} id="logOut" onClick={handleClickAside} className={`${styles.selected === "logOut" && styles.a} duration-500 py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors `}>
                                <div onClick={() => handleClickAside({ target: { id: "logOut" } })} className={`${styles.selected === "logOut" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path className={`${styles.selected === "logOut" && "fill-white"} duration-500`} d="M14 19v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.576-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.424 0 2.774-.302 4-.838v-2.162zm4-9.592l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z" />
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Cerrar Sesion</span>
                            </a>
                        </li>
                        <li className="mt-0.5 w-full">
                            <a ref={remove} id="remove" onClick={handleClickAside} className={`${styles.selected === "remove" && styles.a} duration-500 py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors `} href="javascript:;">
                                <div onClick={() => handleClickAside({ target: { id: "remove" } })} className={`${styles.selected === "remove" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-[7px]`}>
                                    <svg id="Layer_1" version="1.1" viewBox="0 0 64 64" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><style type="text/css">
                                    </style>
                                        <g>
                                            <g className="" id="Icon-Trash" transform="translate(232.000000, 228.000000)">
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
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Eliminar cuenta</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200" id="panel">
                <div className="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
                    <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border mb-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="flex-none w-auto max-w-full px-3">
                                <div className="text-size-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                    <img src={imgProfile} /* "https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/bruce-mars.jpg" */ alt="profile_image" className="w-full shadow-soft-sm rounded-xl" />
                                </div>
                            </div>
                            <div className="flex-none w-auto max-w-full px-3 my-auto">
                                <div className="h-full">
                                    <h5 className="mb-1">{name}</h5>
                                    <p className="mb-0 font-semibold leading-normal text-size-sm">CEO / Co-Founder</p>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                            </div>
                        </div>
                    </div>
                    {
                        styles.selected === "profile" ? <ProfileDetails />
                            : styles.selected === "progress" ? <Progress />
                                : styles.selected === "remove" ? <Remove />
                                    : styles.selected === "logOut" ? <ProfileDetails />
                                        : styles.selected === "billing" && <ProfileDetails />
                    }
                </div>
                {/* <!-- Footer --> */}
                <footer className="pt-4">
                    <div className="w-full px-6 mx-auto">
                        <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                            <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
                                <div className="leading-normal text-center text-size-sm text-slate-500 lg:text-left">
                                    © 2022,
                                    made with <i className="fa fa-heart" aria-hidden="true"></i> by
                                    <a href="https://www.creative-tim.com" className="font-semibold text-slate-700" target="_blank"> Adrian Acurero </a>
                                    the more crack
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                                <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                    <li className="nav-item">
                                        <a href="https://www.creative-tim.com/presentation" className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-size-sm text-slate-500" target="_blank">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://creative-tim.com/blog" className="block px-4 pt-0 pb-1 font-normal transition-colors ease-soft-in-out text-size-sm text-slate-500" target="_blank">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            {/* <script src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/js/plugins/chartjs.min.js" async></script>

    <script src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/js/plugins/perfect-scrollbar.min.js" async></script>

    <script async defer src="https://buttons.github.io/buttons.js"></script>

    <script src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/js/soft-ui-dashboard-tailwind.min.js?v=1.0.2" async></script> */}
        </div>
    )
}

export default Profile