let favoritos: string[] = [];
let listeners: ((fav: string[]) => void)[] = [];

export const getFavoritos = () => favoritos;

export const toggleFavorito = (id: string) => {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((fid) => fid !== id);
  } else {
    favoritos.push(id);
  }
  listeners.forEach((cb) => cb(favoritos));
};

export const isFavorito = (id: string) => favoritos.includes(id);

export const useFavoritos = () => {
  const [state, setState] = require("react").useState(favoritos);

  require("react").useEffect(() => {
    const listener = (data: string[]) => setState([...data]);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return state;
};
