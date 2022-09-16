import "./styles/HomeRegister.css"
import Carousel from "../Carousel/Carousel"
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HomeRegister = () => {



    return (
        <div className="max-w-screen-lg my-12 mx-auto overflow-hidden">
            <Carousel
                content={[
                    { src: img1, text: "hombre fuerte" },
                    { src: img2, text: 'Hombre fuerte 2' },
                    { src: img3, text: "Hombre Fuerte 3" }
                ]}
            />
            <hr />
            <div>
                <h1 className="text-center text-2xl mt-10" >Ejercicios del dia</h1>
                <div className="flex fl space-x-8 mt-5 justify-between">
                    <div className="w-52 h-52 bg-cover">
                        <img className="h-full bg-cover bg-center cursor-pointer" src="https://cdn2.actitudfem.com/media/files/media/files/wall-sit.gif" />
                    </div>
                    <div className="bg-red-600 w-52 h-52">
                        <img className="w-full h-full bg-cover cursor-pointer" src="https://c.tenor.com/NYyx3iSx_gwAAAAd/home-workouts-exercise.gif"/>
                    </div>
                    <div className="bg-red-700 w-52 h-52">
                        <img className="cursor-pointer" src="https://thumbs.gfycat.com/AbleFondChick-size_restricted.gif"/>
                    </div>
                </div>
                <br />
                <hr />
                <div className="flex mt-7">
                    <div className="flex justify-center items-center w-3/5 h-72 bg-slate-500">
                        <h1>«La confianza en uno mismo y el trabajo duro siempre le darán éxito». Virat Kohli.</h1>
                    </div>
                    <div className="flex justify-center items-center w-2/5 h-72 bg-red-400">
                        <h1 className="text-3xl"> IMAGEN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRegister