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
    console.log("Hola");
    if (autoplay) {
      intervalSlides.current = setInterval(() => {
        next();
      }, Number(interval));

      if (buttons.current) {
        buttons.current.addEventListener("mouseenter", () => {
          console.log("Entre boton");
          clearInterval(intervalSlides.current);
        });

        buttons.current.addEventListener("mouseleave", () => {
          intervalSlides.current = setInterval(() => {
            next();
          }, Number(interval));
        });
      }

      slideshow.current?.addEventListener("mouseenter", () => {
        console.log("entre");
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
    <div className="w-2/4 max-h-[750px] flex content-center overflow-hidden ">
      <div className="relative flex content-center">
        <div
          className="flex flex-nowrap max-h-full items-center content-center"
          ref={slideshow}
        >
          {content.map(
            ({ src, text, stylesContent, stylesImage, stylesText }) => {
              return (
                <div
                  className={`min-w-full max-h-[750px] object-cover object-center ease-linear duration-300 z-10 relative rounded-md ${stylesContent}`}
                >
                  {src.slice(-3) === "mp4" ? (
                    <video src={src} autoPlay loop muted />
                  ) : (
                    <img
                      src={src}
                      className={`w-full aling-top bg-cover ${stylesImage}`}
                      alt="Img to slide"
                    />
                  )}
                  {text && (
                    <p
                      className={`bg-black sm:bg-white sm:opacity-30 relative sm:absolute text-white sm:text-black w-full py-3 px-16 text-center bottom-0 ${stylesText}`}
                    >
                      {text}
                    </p>
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
