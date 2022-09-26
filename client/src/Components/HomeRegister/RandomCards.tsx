import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/counter/counterSlice";
import notPremiunImg from "../assets/homeRegister-media/padlock.png";
import notPremiunImg2 from "../assets/homeRegister-media/Img3.jpg";


interface Props {
  _id: string;
  name: string;
  difficulty: string;
  equipment: true;
  muscles: string;
  genre: string;
  video: string;
  premium: string;
}

const RandomCards = ({
  _id,
  video,
  name,
  difficulty,
  muscles,
  genre,
  premium,
}: Props) => {
  const { exercises, user } = useAppSelector(selectUser);

  return (
    <div>
      <Link
        key={_id}
        to={
          premium && user?.plan == "normal"
            ? `/mercadopago`
            : `/ejercicio/${_id}`
        }
        className={`max-w-[75%] min-h-[300px] m-10 flex flex-col bg-white  shadow-md duration-150 cursor-pointer  hover:outline hover:outline-offset-1 ${premium
            ? "outline-blue-400"
            : difficulty == "easy"
              ? "outline-green-400"
              : difficulty == "medium"
                ? "outline-yellow-400"
                : "outline-red-400"
          }
      ${premium && user?.plan == "normal" ? "bg-slate-100" : "bg-slate-50"}`}
      >
        {premium && user?.plan == "normal" && (
          <div className="flex flex-col justify-center  items-center">
            <div className="absolute flex min-h-[10px] w-[10%] justify-center items-center z-10 ">
              <br />
              <img
                className="absolute z-10  w-[50%]"
                src={notPremiunImg}
                alt=""
              />
              <Link
                to="/mercadopago"
                className=" absolute z-10 m-[50px] py-2 px-3 text-sm font-medium text-center text-white bg-[#6c63ff] duration-150 rounded-lg hover:bg-blue-800"
              >
                Premium
              </Link>
            </div>
          </div>
        )}

        <div
          className={`h-[300px] overflow-hidden  ${premium && user?.plan == "normal" ? "blur-[5px]" : "blur-0"
            }`}
        >
          <img
            className="object-cover h-[300px] w-full"
            src={premium && user?.plan == "normal" ? notPremiunImg2 : video}
            alt=""
          />
        </div>
        <div
          className={`${premium && user?.plan == "normal" ? "blur-[5px]" : "blur-0"
            }`}
        >
          <h5 className="p-2 text-center text-xl font-bold -tracking-widest text-gray-900">
            {name}
          </h5>
        </div>


        <div
          className={` text-center ${premium && user?.plan == "normal" ? "blur-[5px]" : "blur-0"
            }`}
        >
          <span
            className={`inline-block ${difficulty == "easy"
                ? "bg-green-200"
                : difficulty == "medium"
                  ? "bg-yellow-200"
                  : "bg-red-200"
              } rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {difficulty}
          </span>
          <span
            className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {muscles}
          </span>
          <span
            className={`inline-block ${genre === "man" ? "bg-blue-400" : "bg-pink-300"
              } rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
          >
            {genre}
          </span>
        </div>
      </Link>
    </div>
  );
};


export default RandomCards;
