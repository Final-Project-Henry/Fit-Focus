import ChartLine from "../Chart/Chart"

const Progress = () => {
  return (
    <div className="w-full p-3 mt-6 mx-auto removable">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-[45%] mb-4">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <div className="flex flex-wrap -mx-3">
                                <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                    <h6 className="mb-0 font-bold text-lg">Progress</h6>
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
                            <ChartLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Progress