import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import btns from "./additional/routes";
import arrow from "../../Components/assets/icons/left-arrow.png";


export default function LateralBar() {
  const navigate = useNavigate();
  const onClick = (url: string) => {
    navigate(`${url}`);
  };

  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="flex">
      <div
        className={`${open ? "w-60" : "w-30"
          } duration-300 h-[100vh] p-5  pt-8 bg-gray-900 relative`}
      >
        <img
          className={`  bg-gray-200 absolute cursor-pointer -right-3 rounded-full top-9  w-9 border-2 ${!open && "rotate-180"
            } `}
          src={arrow}
          alt="arrow.png"
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-4">
          {btns.map((btn: any, index: any) => (
            <li
              className={`flex items-center gap-x-4 cursor-pointer rounded-md p-2 mt-6 hover:bg-gray-800 ${btn.gap ? "mt-9" : "mt-2"
                }`}
              key={index}
              onClick={() => onClick(btn.url)}
            >
              <img
                className="p-1"
                src={btn.img}
                width="30px"
              />
              <p
                className={`text-gray-200 font-semibold text-ms ${!open && "scale-0"
                  } `}
              >
                {btn.tittle}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
