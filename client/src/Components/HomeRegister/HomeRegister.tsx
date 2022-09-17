import "./styles/HomeRegister.css";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
const video = require("../assets/homeRegister-media/Video-Slide.mp4");

const HomeRegister = () => {

    const [exercises, setExercises] = useState([
        {
            _id: "6320dc3eb7171b77e516e646",
            name: "PUSHUPS",
            difficulty: "medium",
            muscles: "upper_body",
            genre: "man",
            video: "https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif"
        },
        {
            _id: "6320dc3eb7171b77e516e64b",
            name: "SUMO SQUATS",
            difficulty: "medium",
            muscles: "lower_body",
            genre: "both",
            video: "https://i.pinimg.com/originals/19/5b/a7/195ba798f4246ae9930a97ea2e084aae.gif"
        },
        {
            _id: "6320dc3eb7171b77e516e648",
            name: "DIAMOND PUSH UPS",
            difficulty: "hard",
            muscles: "upper_body",
            genre: "man",
            video: "https://thumbs.gfycat.com/AffectionateImmenseIrishdraughthorse-size_restricted.gif"
        },
        {
            _id: "6320dc3eb7171b77e516e647",
            name: "KNEE PUSH UPS",
            difficulty: "easy",
            muscles: "upper_body",
            genre: "both",
            video: "https://c.tenor.com/W_cGMvJdlWQAAAAC/widegrip-pushups.gif"
        },
        {
            _id: "6320dc3eb7171b77e516e64a",
            name: "SQUATS",
            difficulty: "easy",
            muscles: "lower_body",
            genre: "both",
            video: "https://c.tenor.com/g6XQ1z_Op0QAAAAC/squats-body-weight-training.gif"
        },
        {
            _id: "6320dc3eb7171b77e516e649",
            name: "CLAP PUSH UPS",
            difficulty: "hard",
            muscles: "upper_body",
            genre: "man",
            video: "https://c.tenor.com/EbRmSXrs5JQAAAAd/clap-pushups-stephen-farrelly.gif"
        }
    ])

    return (
        <div className="max-w-screen-lg my-12 mx-auto overflow-hidden bg-slate-50 rounded-md">
            <Carousel
                content={[
                    { src: "https://res.cloudinary.com/pozters/image/upload/w_700/v1534965023/prod_uploads/ld8w07zMjg0E1y91qp4RO", text: "Hazte premium 15% de descuento", stylesText: "sm:bg-blue-400 sm:opacity-90 sm:font-semibold sm:text-white" },
                    { src: video, text: "¡Entrena con nosotros!", stylesText: "sm:bg-red-300 sm:opacity-60 sm:font-mono" },
                    { src: img2, text: "Hombre Fuerte 3", stylesText: "sm:bg-gray-300 sm:text-black sm:opacity-50 sm:font-bold" },
                ]}
            />
            <br />
            <hr />
            <h1 className="text-center text-3xl mt-10 font-serif">Ejercicios del dia</h1>
            {
                exercises.length && (
                    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        {exercises.map(({video, name, difficulty, muscles, genre, _id}) => {
                            return (
                                <div key={_id} className={`rounded overflow-hidden shadow-lg cursor-pointer duration-300 hover:duration-200 hover:scale-105 hover:outline hover:outline-offset-1 ${difficulty == "easy" ? "outline-green-400" : difficulty == "medium" ? "outline-yellow-400" : "outline-red-400"}`}>
                                    <img className="w-full" src={video} alt={name} />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{name}</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className={`inline-block ${difficulty == "easy" ? "bg-green-200" : difficulty == "medium" ? "bg-yellow-200" : "bg-red-200"} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{difficulty}</span>
                                        <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{muscles}</span>
                                        <span className={`inline-block ${genre === "man" ? "bg-blue-200" : "bg-pink-200"} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{genre}</span>
                                    </div>
                                </div>)
                        })}

                    </div>)
            }
            <br />
            <hr />
            <div className="flex mt-7">
                <div className="flex justify-center items-center w-3/5 h-72 bg-slate-500">
                    <h1>
                        «La confianza en uno mismo y el trabajo duro siempre le darán
                        éxito». Virat Kohli.
                    </h1>
                </div>
                <div className="flex justify-center items-center w-2/5 h-72 bg-red-400">
                    <h1 className="text-3xl"> IMAGEN</h1>
                </div>
            </div>
        </div>

    );
};

export default HomeRegister;
