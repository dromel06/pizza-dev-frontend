import { Grid, Paper, Typography, Stack, Container } from "@mui/material";
import SalsasListDrag from "../components/core/SalsasListDrag";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropZone } from "../components/core/DropZone";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Fabrica({ ingredientsListUrl }) {
  const router = useRouter();
  const [ingredientsList, setIngredienteList] = useState([
    {
      id: 1,
      name: "Salsa de Tomate",
      type: "salsa",
      img: "https://st4.depositphotos.com/1855397/27155/i/450/depositphotos_271553660-stock-photo-texture-tomato-paste-ketchup-background.jpg",
    },
    {
      id: 2,
      name: "Salsa Ranch",
      type: "salsa",
      img: "https://pbs.twimg.com/ext_tw_video_thumb/1247184172004900864/pu/img/XDk5uUqaNGxd8225.jpg",
    },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(ingredientsListUrl);
      setIngredienteList(data.ingredients);
    })();
  }, [ingredientsListUrl]);

  const onClickSave = (pizza) => {
    var newPizza = {
      name: "Pizza Personalizada",
      id: new Date(),
      quantity: 1,
      amount: (pizza.length > 3
        ? 12.99 + 1.5 * (pizza.length - 3)
        : 19.99
      ).toFixed(2),
      built: true,
      coupon: false,
      ingredients: [...pizza],
    };
    const carrito = JSON.parse(localStorage.getItem("carritoPizzaDev"));
    const newCarrito = { ...carrito };
    if (carrito.description) {
      newCarrito.description.push(newPizza);
    } else {
      newCarrito = {
        description: [newPizza],
      };
    }
    localStorage.setItem("carritoPizzaDev", JSON.stringify(newCarrito));
    router.push("./carrito");
  };

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <Grid container mt={3} gap="2rem">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Fábrica de Pizzas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DropZone ingredients={ingredientsList} onClickSave={onClickSave} />
          </Grid>
        </Grid>
      </DndProvider>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      ingredientsListUrl:
        "https://pizzadev-api.herokuapp.com/api/v1/ingredients/",
    },
  };
}
