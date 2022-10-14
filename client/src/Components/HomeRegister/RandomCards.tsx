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
  rating?: number;
}

const RandomCards = ({
  _id,
  video,
  name,
  difficulty,
  muscles,
  rating,
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
        className={`max-w-[75%] min-h-[300px] m-10 flex flex-col bg-white  shadow-md duration-150 cursor-pointer  hover:outline hover:outline-offset-1 ${
          premium
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
      {rating && <div className="flex bg-white z-50">     
        <svg
          aria-hidden="true"
          className="w-10 h-10 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <title>star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        {rating}
      </div>
      }
        <div
          className={`h-[300px] overflow-hidden  ${
            premium && user?.plan == "normal" ? "blur-[5px]" : "blur-0"
          }`}
        >
          <img
            className="object-cover h-[300px] w-full"
            src={premium && user?.plan == "normal" ? notPremiunImg2 : video}
            alt=""
          />
        </div>
        <div
          className={`${
            premium && user?.plan == "normal" ? "blur-[5px]" : "blur-0"
          }`}
        >
          <h5 className="p-2 text-center text-xl font-bold -tracking-widest text-gray-900">
            {name}
          </h5>
        </div>

        <div
          className={` text-center ${
            premium && user?.plan == "normal" ? "blur-[5px]" : "blur-0"
          }`}
        >
          <span
            className={`inline-block ${
              difficulty == "easy"
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
            className={`inline-block ${
              genre === "man" ? "bg-blue-400" : "bg-pink-300"
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
