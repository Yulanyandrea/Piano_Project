const URL = process.env.NEXT_PUBLIC_API_KEY;
console.log(URL);

export const getAllSound = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/drumPaths"
      //`${URL}/api/pianoKey`
      //"https://piano-project-git-tailwind-yulanyandreas-projects.vercel.app/api/pianoKey"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
