export const getDogImage = async (): Promise<{ url: string }> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return { url: data.message };
};
