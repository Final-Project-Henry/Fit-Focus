import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAppDispatch, useToken } from '../../app/hooks'
import { removeAccount, sigendOut } from '../../features/counter/counterSlice'


const Remove = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const token = useToken()

    function handleRemoveAccount(): void {
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "No podras revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "Cancelar",
            confirmButtonText: 'Eliminar',
        }).then((result: any) => {
            if (result.isConfirmed) {
                dispatch(sigendOut(null))
                dispatch(removeAccount(token))

                navigate("/home")
                window.location.reload();
                Swal.fire(
                    'Eliminado',
                    'Tu cuenta ha sido eliminada exitosamente',
                    'success'
                )
            }
        })
    }


    return (
        <div className="w-full p-3 mt-6 mx-auto removable">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                    <h6 className="mb-0 font-bold text-lg">Eliminar cuenta</h6>
                                </div>
                                <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                                    <a data-target="tooltip_trigger" data-placement="top">
                                        <i className="leading-normal fas fa-user-edit text-size-sm text-slate-400" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto p-4">
                            <hr className="h-px my-2 bg-transparent bg-gradient-horizontal-light" />
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-sm text-inherit"><strong className="text-slate-700">Esta accion es definitiva</strong> &nbsp; </li>
                                <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"> Si eliminas tu cuenta de Fit-Focus, no podrás recuperar el progreso ni las rutinas obtenidas en la app. También se eliminara todo el registro que hayamos guardado de ti</li>
                                <li className="relative flex justify-center px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-size-sm text-inherit"><strong className="text-slate-700"></strong> &nbsp;
                                    <button onClick={handleRemoveAccount} type="button" className="delay-100 duration-300 inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg  ease-in-out">
                                        Eliminar cuenta
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remove