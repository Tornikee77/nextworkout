import { CatApiImage } from "../types";

export const getCatImage = async (): Promise<CatApiImage> => {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  if (!res.ok) throw new Error("failed to fetch");
  return res.json();
};

// https://dog.ceo/api/breeds/image/random
