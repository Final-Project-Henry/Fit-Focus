import { useState, useEffect, ReactComponentElement } from "react"
import { useParams } from "react-router-dom";
import news, { news as newsInterface } from "./newsData";
import { News1, News2, News3, News4, News5, News6, News7, News8, News9, News10 } from "./newsComponents/indexNews"
import Footer from "../../footer/Footer";
import Navbar from "../../Navbar/Navbar";



const NewsBlog = () => {

    const { id } = useParams()
    const [newsData, setNewsData] = useState<newsInterface | null>()

    useEffect(() => {
        setNewsData(news.find(e => e.id === Number(id)))
    }, [])


    return (
        <div>
            {/* component */}
            <div className="max-w-screen-lg mx-auto mb-32">
                <main className="mt-10">
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 lg:px-0">
                            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                                {newsData?.title}
                            </h2>
                            <a
                                href="#"
                                className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
                                {/* tags */}
                            </a>
                        </div>
                        <img
                            src={newsData?.image}
                            className="w-full object-cover lg:rounded"
                            style={{ height: "28em" }}
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            {newsData?.id === 0 ? <News1 /> 
                            : newsData?.id === 1 ? <News2 /> 
                            : newsData?.id === 2 ? <News3 /> 
                            : newsData?.id === 3 ? <News4 /> 
                            : newsData?.id === 4 ? <News5 /> 
                            : newsData?.id === 5 ? <News6 /> 
                            : newsData?.id === 6 ? <News7 /> 
                            : newsData?.id === 7 ? <News8 /> 
                            : newsData?.id === 8 ? <News9 /> 
                            : newsData?.id === 9 ? <News10 /> 
                            : null
                            }
                        </div>
                        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                            <div className="p-4 border-t border-b md:border md:rounded">
                                <div className="flex py-2">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/97.jpg"
                                        className="h-10 w-10 rounded-full mr-2 object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">
                                            Adrian Acurero
                                        </p>
                                        <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Adrian is a developer and he make this seccion to news for Fit-Focus
                                </p>
                                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                    Follow
                                    <i className="bx bx-user-plus ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                {/* main ends here */}
            </div>
            <Footer/>
        </div>


    );
};

export default NewsBlog;
