import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/homeRegister-media/iconmonstr-angel-left-thin.svg";
import { ReactComponent as ArrowRight } from "../assets/homeRegister-media/iconmonstr-angel-right-thin.svg";

interface data {
    src: string;
    text?: string;
    stylesContent?: string;
    stylesImage?: string;
    stylesText?: string;
}

interface Props {
    controls?: boolean;
    autoplay?: boolean;
    velocity?: string;
    interval?: string;
    content: Array<data>;
}

const Carousel: React.FC<Props> = ({
    controls = true,
    velocity = "300",
    autoplay = false,
    interval = "5000",
    content = [],
}) => {
    const slideshow = useRef<HTMLHeadingElement | null>(null);
    const buttons = useRef<HTMLHeadingElement | null>(null);
    const intervalSlides = useRef<any>(null);
    const [timePrevius, setTimePrevius] = useState(true);

    const next = useCallback(() => {
        if (slideshow.current?.children.length) {
            //obtenemos el primer elemento del slice
            const firstElement = slideshow.current.children[0];

            //establecemos una transicion
            slideshow.current.style.transition = `${velocity}ms ease-out all`;

            //obtenemos el ancho de dicho slice
            const slice = slideshow.current.children[0] as HTMLElement;
            const sliceSize = slice.offsetWidth;

            //desplazamos el slice por la cantidad del ancho
            slideshow.current.style.transform = `translateX(-${sliceSize}px)`;

            const reset = () => {
                //reiniciamos la posicion del slice
                if (slideshow.current) {
                    slideshow.current.style.transition = "none";
                    slideshow.current.style.transform = `translateX(0px)`;
                    //Tomamos el primer elemento y lo mandamos al final
                    slideshow.current.appendChild(firstElement);
                    slideshow.current.removeEventListener("transitionend", reset);
                }
            };

            //llama a la funcion reset cuando termina la transicion
            slideshow.current.addEventListener("transitionend", reset);
        }
    }, [slideshow, velocity]);

    const previus = () => {
        setTimePrevius(false);
        setTimeout(() => setTimePrevius(true), Number(velocity));
        if (slideshow.current?.children.length) {
            const positionLast = slideshow.current.children.length - 1;
            const lastElement = slideshow.current.children[positionLast];

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = "none";

            const slice = slideshow.current.children[0] as HTMLElement;
            const sliceSize = slice.offsetWidth;

            slideshow.current.style.transform = `translateX(-${sliceSize}px)`;

            setTimeout(() => {
                if (slideshow.current) {
                    slideshow.current.style.transition = `${velocity}ms ease-out all`;
                    slideshow.current.style.transform = `translateX(0)`;
                }
            }, 15);
        }
    };

    useEffect(() => {
        console.log("Hola")
        if (autoplay) {
            intervalSlides.current = setInterval(() => {
                next();
            }, Number(interval));

            if (buttons.current) {

                buttons.current.addEventListener("mouseenter", () => {
                    console.log("Entre boton")
                    clearInterval(intervalSlides.current);
                });

                buttons.current.addEventListener("mouseleave", () => {
                    intervalSlides.current = setInterval(() => {
                        next();
                    }, Number(interval));
                });
            }

            slideshow.current?.addEventListener("mouseenter", () => {
                console.log("entre")
                clearInterval(intervalSlides.current);
            });

            slideshow.current?.addEventListener("mouseleave", () => {
                intervalSlides.current = setInterval(() => {
                    next();
                }, Number(interval));
            });
        }
    }, [autoplay, interval, next, intervalSlides, buttons]);

    return (
        <div className="max-w-full max-h-[750px] flex content-center overflow-hidden ">
            {content.length >= 2 ? (
                <div className="relative flex content-center">
                    <div className="flex flex-nowrap max-h-full items-center content-center" ref={slideshow}>
                        {content.map(({ src, text, stylesContent, stylesImage, stylesText }) => {
                            return (
                                <div className={`min-w-full max-h-[750px] object-cover object-center ease-linear duration-300 z-10 relative rounded-md ${stylesContent}`}>
                                    {
                                        src.slice(-3) === "mp4"
                                            ? <video src={src} autoPlay loop muted />
                                            : <img
                                                src={src}
                                                className={`w-full aling-top bg-cover ${stylesImage}`}
                                                alt="Img to slide" />
                                    }
                                    {text && (
                                        <p className={`bg-black sm:bg-white sm:opacity-30 relative sm:absolute text-white sm:text-black w-full py-3 px-16 text-center bottom-0 ${stylesText}`}>
                                            {text}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    {controls && (
                        <div
                            className="absolute top-5 z-20 w-full h-full pointer-events-none"
                            ref={buttons}
                        >
                            <button className="hover:scale-150 hover:duration-300 pointer-events-auto bg-none border-none cursor-pointer outline-none w-12 h-full text-center absolute ease-linear duration-500 left-0 drop-shadow-[2px_0px_0px_#fff]">
                                <ArrowLeft
                                    className="m-[6px]"
                                    onClick={() => (timePrevius ? previus() : null)}
                                />
                            </button>
                            <button className="hover:scale-150 hover:duration-300 pointer-events-auto border-none cursor-pointer outline-none h-full text-center absolute ease-linear duration-300 right-0 drop-shadow-[-2px_0px_0px_#fff]">
                                <ArrowRight className="m-[16px]" onClick={next} />
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <h1 className="text-center text-red-600 text-3xl">
                    Al carrusel debe pasarse al menos 2 imagenes
                </h1>
            )}
        </div>
    );
};

export default Carousel;
