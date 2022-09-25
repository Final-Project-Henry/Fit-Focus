import { useState, useEffect, ReactComponentElement } from "react"
import { useParams } from "react-router-dom";
import news, { news as newsInterface } from "./newsData";
import { News1, News2, News3, News4, News5, News6, News7, News8, News9, News10 } from "./newsComponents/indexNews"



const NewsBlog = () => {

    const { id } = useParams()
    const [newsData, setNewsData] = useState<newsInterface | null>()

    useEffect(() => {
        setNewsData(news.find(e => e.id === Number(id)))
    }, [])


    return (
        <div>
            {/* component */}
            <div className="max-w-screen-lg mx-auto">
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
                                            Mike Sullivan
                                        </p>
                                        <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 py-3">
                                    Mike writes about technology Yourself required no at thoughts
                                    delicate landlord it be. Branched dashwood do is whatever it.
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
                {/* footer */}
                <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                            className="h-12 w-12"
                            alt="logo"
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-2/5">
                            <p className="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-12">
                                Boisterous he on understood attachment as entreaties ye devonshire.
                                In mile an form snug were been sell. Extremely ham any his departure
                                for contained curiosity defective. Way now instrument had eat
                                diminution melancholy expression sentiments stimulated.
                            </p>
                        </div>
                        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                            <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                            <ul>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Team
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        About us
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                            <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
                            <ul>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Blog
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Documentation
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                            <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                            <ul>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Team
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        About us
                                    </a>
                                </li>
                                <li>

                                    <a href="" className="block text-gray-600 py-2">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>


    );
};

export default NewsBlog;
