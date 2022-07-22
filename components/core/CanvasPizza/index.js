import React, { useRef, useEffect } from "react";

export default function CanvasPizza({ Ingredientes }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    //Our first draw
    var pizzaImg = new Image();
    pizzaImg.src =
      "https://okdiario.com/img/2016/10/23/receta-masa-pizza-facil-655x368.jpg";
    // context.fillStyle = "#f2d312";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(pizzaImg, 0, 0, 100, 100);

    if (Ingredientes) {
      Ingredientes.forEach((ingrediente) => {
        var ingredienteImg = new Image();
        ingredienteImg.src = ingrediente.url;
        context.drawImage(ingredienteImg, 0, 0, 300, 200);
      });
    }
  }, [Ingredientes]);

  return <canvas ref={canvasRef} />;
}
