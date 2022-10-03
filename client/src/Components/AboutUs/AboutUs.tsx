import React from "react";
import Visitor7 from "../HomeVisitor/visitor_7/Visitor7";
import Table from "./Table.jsx";

function AboutUs() {
  return (
    <div>
      <div className="grid place-items-center">
        <h1 className="font-bold text-6xl p-7">Nuestro Equipo</h1>
        <div className="w-[80%] text-lg  text-justify font-semibold mt-10">
          <h1>
            Somos un grupo de programadores que por medio de los conocimientos
            adquiridos en Henry y el gran esfuerzo del trabajo en equipo,
            diseñamos y desarrollamos la aplicación FIT FOCUS la cual es una
            herramienta para mejorar la salud de todos para que cualquier
            persona pueda ejercitarse cuando quiera y donde quiera, esperamos
            que sea de su gusto y utilidad, puedes contactar y conocer a los
            brillantes integrantes a continuación.
          </h1>
        </div>
      </div>
      <Table />
    </div>
  );
}

export default AboutUs;
