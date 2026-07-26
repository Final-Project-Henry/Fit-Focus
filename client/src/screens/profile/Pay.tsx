const Pay = ({ plan }: any) => {
    return (
        <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-2/6 h-44 mb-4">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">

                <div className="flex-auto p-4">
                    <hr className="h-px my-2 bg-transparent bg-gradient-horizontal-light" />
                    <ul className="flex flex-col pl-0 mb-0 ml-4 rounded-lg">
                        <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                            <strong className="text-slate-700 mr-0.5">
                                Historial de pagos
                            </strong>
                        </li>


                        <li className="relative block ml-2 mt-2 px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-size-base text-inherit">
                            {
                                plan === "premium"
                                    ? <strong className="text-slate-600 mr-0.5">
                                        • Cuenta premium: <span className="text-green-500">3000$</span>
                                    </strong>
                                    : <strong className="text-slate-600 mr-0.5">
                                    • Sin pagos
                                </strong>
                                }

                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pay