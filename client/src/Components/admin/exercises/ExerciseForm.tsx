import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { add_exercise } from "../../../features/admin/admin";

export default function ExerciseForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const admin = useAppSelector((state) => state.admin);

  const onClean = () => {
    reset();
  };

  const onSubmit = async (data: any) => {
    dispatch(add_exercise(data));
    onClean();
  };

  useEffect(() => {
    if (admin.load_exer === "loaded") {
      alert("se cargo el ejercicio con exito");
    }
  }, [admin]);

  return (
    <div style={{ margin: "0 auto" }}>
      <div className="w-full px-24 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg m-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <h2 className="p-4 font-semibold text-md">Create a new excercise:</h2>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                autoComplete="off"
                placeholder="Type a exercise name"
                id="name"
                onKeyUp={(e: any) =>
                  (e.target.value = e.target.value.toUpperCase())
                }
                {...register("name")}
                type="text"
                name="name"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Difficulty
            </label>
            <select
              id="difficulty"
              {...register("difficulty")}
              className="block pr-[100px] w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option hidden>Select difficulty</option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="muscles"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Muscles
            </label>
            <select
              id="muscles"
              {...register("muscles")}
              className="block pr-[100px] w-[100%] mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option hidden>Select Muscles</option>
              <option value="upper_body">upper body</option>
              <option value="lower_body">lower body</option>
              <option value="stretching">stretching</option>
              <option value="functional">functional</option>
              <option value="abs">abs</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Genre
            </label>
            <select
              id="genre"
              {...register("genre")}
              className="block pr-[115px] w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option hidden>Select Genre</option>
              <option value="man">man</option>
              <option value="woman">woman</option>
              <option value="both">both</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="video"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Video
            </label>
            <div className="flex flex-col items-start">
              <input
                id="video"
                {...register("video")}
                type="url"
                name="video"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="premium"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Premium
            </label>
            <select
              id="premium"
              {...register("premium")}
              className="block pr-[115px] w-[100%] mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option hidden>Select Plan</option>
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Description
            </label>
            <div className="flex flex-col items-start">
              <textarea
                rows={5}
                id="description"
                {...register("description")}
                name="description"
                className="resize-none block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-5 mb-4">
            <button
              type="submit"
              className="items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-amber-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Create
            </button>
            <button
              className="items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-amber-900 border border-transparent rounded-md active:bg-gray-900 false"
              onClick={onClean}
            >
              Clean
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
