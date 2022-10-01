import React from "react";
import { useForm } from "react-hook-form";

export default function ExerciseForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <div style={{ margin: "0 auto" }}>
      <div className="w-full px-24 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg m-auto">
        <form className="flex flex-col justify-center items-center">
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
                id="name"
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
            <div className="flex flex-col items-start">
              <input
                id="difficulty"
                {...register("difficulty")}
                type="text"
                name="dificculty"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="muscles"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Muscles
            </label>
            <div className="flex flex-col items-start">
              <input
                id="muscles"
                {...register("muscles")}
                type="text"
                name="muscles"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="genre"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Genre
            </label>
            <div className="flex flex-col items-start">
              <input
                id="genre"
                {...register("genre")}
                type="text"
                name="genre"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
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
                type="text"
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
            <div className="flex flex-col items-start">
              <input
                id="premium"
                {...register("premium")}
                type="text"
                name="genre"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
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

          <div className="flex items-center justify-center mt-4 mb-4">
            <button
              type="submit"
              className="items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-amber-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Create
            </button>
            <button
              type="submit"
              className="items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-amber-900 border border-transparent rounded-md active:bg-gray-900 false"
            >
              Clean
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
