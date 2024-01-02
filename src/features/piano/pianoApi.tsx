const URL = process.env.NEXT_PUBLIC_API_KEY

export const getAllInstruments = async () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch('/api/pianoKey', payload);
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.log(error);
  }
};