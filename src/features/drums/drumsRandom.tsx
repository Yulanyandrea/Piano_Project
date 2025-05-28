const objectRandom = (obj: any) => {
  const key = Object.keys(obj);
  const randomItem = Math.floor(Math.random() * key.length);
  const finalValue = key[randomItem];
  return obj[finalValue];
};

export default objectRandom;

//Esta función selecciona un color aleatorio en Drums index.tsx
