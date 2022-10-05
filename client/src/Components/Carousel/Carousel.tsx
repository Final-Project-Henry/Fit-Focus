import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from "../assets/homeRegister-media/iconmonstr-angel-left-thin.svg";
import { ReactComponent as ArrowRight } from "../assets/homeRegister-media/iconmonstr-angel-right-thin.svg";
import { Link } from "react-router-dom";
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
    if (autoplay) {
      intervalSlides.current = setInterval(() => {
        next();
      }, Number(interval));

      if (buttons.current) {
        buttons.current.addEventListener("mouseenter", () => {
          clearInterval(intervalSlides.current);
        });

        buttons.current.addEventListener("mouseleave", () => {
          intervalSlides.current = setInterval(() => {
            next();
          }, Number(interval));
        });
      }

      slideshow.current?.addEventListener("mouseenter", () => {
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
    <div className="w-[100%] mx-auto max-h-[400px] flex justify-center content-center overflow-hidden rounded-xl ">
      <div className="relative flex z-[1] content-center">
        <div
          className="flex flex-nowrap max-h-full items-center content-center"
          ref={slideshow}
        >
          {content.map(
            ({ src, text, stylesContent, stylesImage, stylesText }) => {
              return (
                <div
                  className={` min-w-full  ease-linear duration-300  flex items-center  rounded-2xl ${stylesContent}`}
                >
                  {text && (
                    <div className="absolute bg-[#111828c4] flex flex-col  w-full py-60 px-10 text-white z-10">
                      <p className="font-extrabold  py-5 w-[50%] text-[2rem]">
                        {text}
                      </p>
                      <Link
                        to="/mercadopago"
                        className="inline-flex items-center py-2 px-[2rem] w-40 text-2xl font-black text-center text-white bg-[#004cff] duration-150 rounded-lg hover:bg-blue-800"
                      >
                        Premium
                      </Link>
                    </div>
                  )}
                  {src.slice(-3) === "mp4" ? (
                    <video src={src} autoPlay loop muted />
                  ) : (
                    <img
                      src={src}
                      className={`w-full aling-top bg-cover ${stylesImage}`}
                      alt="Img to slide"
                    />
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
