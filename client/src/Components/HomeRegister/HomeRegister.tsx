import "./styles/HomeRegister.css"
import Carousel from "../Carousel/Carousel"
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";

const HomeRegister = () => {

    return (
        <div className="max-w-screen-lg my-12 mx-auto overflow-hidden">
            <Carousel
            content={[
                {src: img1, text: "hombre fuerte"},
                {src: img2, text: 'Hombre fuerte 2'},
                {src: img3, text: "Hombre Fuerte 3"}
            ]}
            />
            <div>
                <h1 className="text-center text-2xl mt-10" >Ejercicios Semanales</h1>
                <div className="flex fl space-x-8 mt-5 justify-between">
                    <div className="bg-red-500 w-52 h-52">
                        <video src="" />
                    </div>
                    <div className="bg-red-600 w-52 h-52">

                    </div>
                    <div className="bg-red-700 w-52 h-52">

                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="flex justify-center items-center w-3/5 h-72 bg-slate-500">
                        <h1>No eres lo que comes, eres lo que piensas</h1>
                    </div>
                    <div className="flex justify-center items-center w-2/5 h-72 bg-red-400">
                        <h1 className="text-3xl">IMAGEN SEXY DE ACURERO</h1>
                    </div>
                </div>
                <div className="mt-10 h-80">
                    <h1 className="text-xl text-center">Tu opinion vale para nosotros como el bolivar</h1>
                    <form action="">
                        br
                        <p className="inline-block mr-2 w-2/6">Email:</p>
                        <input type="email" className="h-4 w-2/4" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomeRegister