import "./styles/Profile.css"
import "./styles/Loople.css"
import { useRef, useState } from "react"

const Profile = () => {

    const [styles, setStyles] = useState({
        selected: "profile",
        a: "shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700",
        div: "bg-gradient-fuchsia",
        path: "fill-slate-800"
    })

    const profile = useRef<HTMLAnchorElement | null>(null)
    const settings = useRef<HTMLAnchorElement | null>(null)
    const progress = useRef<HTMLAnchorElement | null>(null)

    const handleClickAside = (e: any) => {
        console.log(e.target.id)

        if (e.target.id === "profile") {
            setStyles({ ...styles, selected: "profile" })
        } else if (e.target.id === "settings") {
            setStyles({ ...styles, selected: "settings" })
        } else {
            setStyles({ ...styles, selected: "progress" })
        }


    }


    return (
        <div className="relative">
            <aside className="max-w-62.5 ease-nav-brand z-990 absolute inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent text-slate-500" id="sidenav-main">
                <hr className="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
                <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
                    <ul className="flex flex-col pl-0 mb-0">
                        <li className="mt-0.5 w-full">
                            <a ref={profile} id="profile" onClick={handleClickAside} className={`${styles.selected === "profile" && styles.a} duration-500 py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors cursor-pointer`}>
                                <div className={`${styles.selected === "profile" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
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
                            <a ref={settings} id="settings" onClick={handleClickAside} className={`${styles.selected === "settings" && styles.a} duration-500 py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors `} href="javascript:;">
                                <div className={`${styles.selected === "settings" && styles.div} duration-500 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
                                    <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>settings</title>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(304.000000, 151.000000)">
                                                        <polygon className={`${styles.selected !== "settings" && styles.path} duration-500 opacity-60`} points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                                                        <path className={`${styles.selected !== "settings" && styles.path} opacity-60`} d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"></path>
                                                        <path className={`${styles.selected !== "settings" && styles.path} duration-500`} d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Configuracion</span>
                            </a>
                        </li>
                        <li className="mt-0.5 w-full">
                            <a ref={progress} id="progress" onClick={handleClickAside} className={`${styles.selected === "progress" && styles.a} py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors duration-500`} href="javascript:;">
                                <div className={`${styles.selected === "progress" && styles.div} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 duration-500`}>
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
                            <a className="py-2.7 text-size-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="javascript:;">
                                <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                                    <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>credit-card</title>
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                <g transform="translate(1716.000000, 291.000000)">
                                                    <g transform="translate(453.000000, 454.000000)">
                                                        <path className="fill-slate-800 opacity-60" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"></path>
                                                        <path className="fill-slate-800" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Billing</span>
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
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/bruce-mars.jpg" alt="profile_image" className="w-full shadow-soft-sm rounded-xl" />
                                </div>
                            </div>
                            <div className="flex-none w-auto max-w-full px-3 my-auto">
                                <div className="h-full">
                                    <h5 className="mb-1">Alec Thompson</h5>
                                    <p className="mb-0 font-semibold leading-normal text-size-sm">CEO / Co-Founder</p>
                                </div>
                            </div>
                            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-3 mt-6 mx-auto removable">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4">
                                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                                    <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                                        <div className="flex flex-wrap -mx-3">
                                            <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                                <h6 className="mb-0">Profile Information</h6>
                                            </div>
                                            <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                                                <a data-target="tooltip_trigger" data-placement="top">
                                                    <i className="leading-normal fas fa-user-edit text-size-sm text-slate-400" aria-hidden="true"></i>
                                                </a>
                                                <div data-target="tooltip" className="px-2 py-1 text-center text-white bg-black rounded-lg text-size-sm hidden" role="tooltip" data-popper-placement="top" style={{ position: "absolute", inset: "auto auto 0px 0px", margin: 0, transform: "translate3d(869.5px, -417.5px, 0px)" }}>
                                                    Edit Profile
                                                    <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style={{ position: "absolute", left: 0, transform: "translate3d(0px, 0px, 0px)" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-auto p-4">
                                        <p className="leading-normal text-size-sm">Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                                        <hr className="h-px my-6 bg-transparent bg-gradient-horizontal-light" />
                                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-sm text-inherit"><strong className="text-slate-700">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"><strong className="text-slate-700">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"><strong className="text-slate-700">Email:</strong> &nbsp; alecthompson@mail.com</li>
                                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"><strong className="text-slate-700">Location:</strong> &nbsp; USA</li>
                                            <li className="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                                                <strong className="leading-normal text-size-sm text-slate-700">Social:</strong> &nbsp;
                                                <a className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-blue-800 align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-size-xs ease-soft-in bg-none" href="javascript:;">
                                                    <i className="fab fa-facebook fa-lg" aria-hidden="true"></i>
                                                </a>
                                                <a className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-size-xs ease-soft-in bg-none text-sky-600" href="javascript:;">
                                                    <i className="fab fa-twitter fa-lg" aria-hidden="true"></i>
                                                </a>
                                                <a className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-size-xs ease-soft-in bg-none text-sky-900" href="javascript:;">
                                                    <i className="fab fa-instagram fa-lg" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
            <div className="loopple-badge">Made with<a href="https://www.loopple.com"><img src="https://www.loopple.com/img/loopple-logo.png" className="loopple-ml-1" style={{ width: "55px" }} /></a></div>
            {/* <script src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/js/plugins/chartjs.min.js" async></script>

    <script src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/js/plugins/perfect-scrollbar.min.js" async></script>

    <script async defer src="https://buttons.github.io/buttons.js"></script>

    <script src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/js/soft-ui-dashboard-tailwind.min.js?v=1.0.2" async></script> */}
        </div>
    )
}

export default Profile