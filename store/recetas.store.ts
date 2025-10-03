export type Receta = {
  id: string;
  nombre: string;
  ingredientes: string[];
  region: string;
  imagen: any; 
};

export const recetas: Receta[] = [
  {
    id: "1",
    nombre: "Encocado de Camarón",
    ingredientes: [
      "Camarones",
      "Leche de coco",
      "Cebolla",
      "Ajo",
      "Pimiento",
      "Plátano maduro",
    ],
    region: "Pacífica",
    imagen: require("../assets/recetas/encocado-camaron.jpg"),
  },
  {
    id: "2",
    nombre: "Cazuela de Mariscos",
    ingredientes: [
      "Mejillones",
      "Camarones",
      "Calamares",
      "Leche de coco",
      "Cilantro",
      "Tomate",
    ],
    region: "Pacífica",
    imagen: require("../assets/recetas/cazuela-mariscos.jpg"),
  },
  {
    id: "3",
    nombre: "Sopa de Cangrejo",
    ingredientes: [
      "Cangrejo",
      "Plátano verde",
      "Yuca",
      "Papa",
      "Cebolla larga",
      "Cilantro",
    ],
    region: "Pacífica",
    imagen: require("../assets/recetas/sopa-cangrejo.jpg"),
  },
  {
    id: "4",
    nombre: "Tapao de Pescado",
    ingredientes: [
      "Pescado fresco",
      "Plátano verde",
      "Yuca",
      "Papa",
      "Cilantro cimarrón",
      "Ajo",
    ],
    region: "Pacífica",
    imagen: require("../assets/recetas/tapao-pescado.jpg"),
  },
  {
    id: "5",
    nombre: "Arroz Atollado del Pacífico",
    ingredientes: [
      "Arroz",
      "Pollo",
      "Cerdo",
      "Papa criolla",
      "Longaniza",
      "Cebolla",
      "Ajo",
    ],
    region: "Pacífica",
    imagen: require("../assets/recetas/arroz-atollado.jpg"),
  },
];

let favoritos: string[] = [];

export const getFavoritos = () => favoritos;

export const toggleFavorito = (id: string) => {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((fid) => fid !== id);
  } else {
    favoritos.push(id);
  }
};

export const isFavorito = (id: string) => favoritos.includes(id);


export const getRecetas = () => recetas;
  