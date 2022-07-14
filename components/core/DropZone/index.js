import { Box, display, width } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { useDrop } from "react-dnd";
import { DragCard } from "../DragCard";
import Canvas from "../CanvasPizza";

const salsas = [
  {
    name: "Tomate",
    image:
      "https://st4.depositphotos.com/1855397/27155/i/450/depositphotos_271553660-stock-photo-texture-tomato-paste-ketchup-background.jpg",
  },
  {
    name: "Jamón",
    image:
      "https://st4.depositphotos.com/1855397/27155/i/450/depositphotos_271553660-stock-photo-texture-tomato-paste-ketchup-background.jpg",
  },
];

export const DropZone = () => {
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;

  const [basket, setBasket] = useState([]);
  useEffect(() => {
    console.log(basket);
    console.log("pizza");
  }, [basket, canvas]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Box>
      <Box
        className="basket"
        ref={dropRef}
        sx={{
          backgroundColor: "gray",
          width: "300px",
          minHeight: "300px",
          display: "flex",
          margin: "30px auto",
        }}
      >
        {!isOver && <Canvas ref={canvasRef} Ingredientes={basket} />}
        {!isOver &&
          basket.map((pet) => (
            <DragCard key={pet.id} name={pet.name} image={pet.image} />
          ))}
        {<Box></Box>}
      </Box>
      <Box
        className="ingredient"
        sx={{
          width: "100px",
          margin: "12px",
          display: "flex",
        }}
      >
        {salsas.map((pet) => (
          <DragCard draggable key={pet.id} name={pet.name} image={pet.image} />
        ))}
      </Box>
    </Box>
  );
};
