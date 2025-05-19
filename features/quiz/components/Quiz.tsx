"use client";

import { useQuery } from "@tanstack/react-query";
import { getQuizImages } from "../api/getQuizImages";
import { useState } from "react";

const Quiz = () => {
  let [score, setScore] = useState(0);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["quizImages"],
    queryFn: getQuizImages,
  });
  const handleClick = (index: number, isDog: boolean) => {
    if (isDog) {
      setScore((prev) => prev + 1);
    }
  };
  if (isLoading) return <p className="mt-10 text-center">Loading...</p>;
  if (error) return <p className="mt-10 text-center">Error loading quiz</p>;

  return (
    <div className="flex flex-col items-center bg-gray-50 p-8 min-h-screen">
      <h1 className="mb-6 font-bold text-3xl">Find the Dog</h1>
      <p className="mb-4 text-lg">Click the dog to score and load new round!</p>

      <div className="gap-6 grid grid-cols-3">
        {data?.map((eachImg, index) => (
          <img
            className="blur-sm rounded-xl w-[100px] h-[48px] object-cover hover:scale-105 transition-300 ease-in-out cursor-pointer"
            src={eachImg.url}
            onClick={() => handleClick(index, eachImg.isDog)}
            alt="quiz image"
            key={index}
          />
        ))}
      </div>

      <div className="mt-[30px] font-700 text-[32px] text-[aqua]">
        Score:{score}
      </div>
    </div>
  );
};

export default Quiz;
