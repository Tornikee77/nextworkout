import { getCatImage } from "./getCatImages";
import { getDogImage } from "./getDogImages";
import { QuizImage } from "../types";

export const getQuizImages = async (): Promise<QuizImage[]> => {
  const [cats, dog] = await Promise.all([getCatImage(), getDogImage()]);
  const catImages: QuizImage[] = cats.map((eachImg) => ({
    url: eachImg.url,
    isDog: false,
  }));
  const dogImage: QuizImage = {
    url: dog.url,
    isDog: true,
  };
  return [...catImages, dogImage];
};
