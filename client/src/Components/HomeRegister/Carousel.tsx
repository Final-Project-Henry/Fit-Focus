import { useRef } from "react";
import img1 from "../assets/homeRegister-media/Img1.jpg";
import img2 from "../assets/homeRegister-media/Img2.jpg";
import img3 from "../assets/homeRegister-media/Img3.jpg";
import { ReactComponent as ArrowLeft } from "../assets/homeRegister-media/iconmonstr-angel-left-thin.svg";
import { ReactComponent as ArrowRight } from "../assets/homeRegister-media/iconmonstr-angel-right-thin.svg";


const Carousel = () => {
    const slideshow = useRef<HTMLHeadingElement>(null)

    const next = () => {
        if(slideshow.current?.children.length ) {
            const firstElement = slideshow.current.children[0]

            slideshow.current.style.transition = `300ms ease-out all`;

            const sliceSize = slideshow.current.children[0];
            console.log(sliceSize)

            slideshow.current.style.transition = `translate(-500px)`
        }
    }

    const previus = () => {

    }

    return (
        <div>
            <div className="flex flex-nowrap relative" ref={slideshow}>
                <div className="min-w-full overflow-hidden ease-linear duration-300 z-10 relative">
                    <a href="/">
                        <img
                            src={img1}
                            className="w-full aling-top"
                        />
                    </a>
                    <div>
                        <p className="bg-black sm:bg-white sm:opacity-30 relative sm:absolute text-white sm:text-black w-full py-3 px-16 text-center bottom-0">
                            Hombre fuerte</p>
                    </div>
                </div>
                <div className="min-w-full overflow-hidden ease-linear duration-300 z-10 relative">
                    <a href="/">
                        <img src={img2}
                            className="w-full aling-top"
                        />
                    </a>
                    <div>
                        <p className="bg-black sm:bg-white sm:opacity-30 relative sm:absolute text-white sm:text-black w-full py-3 px-16 text-center bottom-0">
                            Hombre fuerte 2</p>
                    </div>
                </div>
                <div className="min-w-full overflow-hidden ease-linear duration-300 z-10 relative">
                    <a href="/">
                        <img src={img3}
                            className="w-full aling-top"
                        />
                    </a>
                    <div>
                        <p className="bg-black sm:bg-white sm:opacity-30 relative sm:absolute text-white sm:text-black w-full py-3 px-16 text-center bottom-0">
                            Hombre fuerte 3</p>
                    </div>
                </div>
                <div className="absolute top-0 z-20 w-full h-full pointer-events-none">
                    <button className="pointer-events-auto bg-none border-none cursor-pointer outline-none w-12 h-full text-center absolute ease-linear duration-300 left-0 drop-shadow-[2px_0px_0px_#fff]">
                        <ArrowLeft className="m-[6px]" />
                    </button>
                    <button className="pointer-events-auto border-none cursor-pointer outline-none w-12 h-full text-center absolute ease-linear duration-300 right-0 drop-shadow-[-2px_0px_0px_#fff]">
                        <ArrowRight className="m-[16px]" onClick={next}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel