const URL = process.env.NEXT_PUBLIC_API_KEY

export const getAllInstruments = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/pianoKey');
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.log(error);
  }
};