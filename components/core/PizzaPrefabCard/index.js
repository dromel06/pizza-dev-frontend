import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export function PizzaPrefabcard({
  pizza: { pid, name, price, img, description },
}) {
  const onClickAdd = () => {
    var pizzaforAdd = {
      id: pid,
      name: name,
      quantity: 1,
      amount: price,
      built: false,
    };

    let carrito = JSON.parse(localStorage.getItem("carritoPizzaDev"));
    let agregado = false;
    console.log({ carrito });
    const newCarrito = [];
    carrito.description.forEach((p) => {
      let quantity = p.quantity;
      if (p.id) {
        if (p.id === pid) {
          quantity += 1;
          agregado = true;
        }
      }
      p.quantity = quantity;
      newCarrito.push(p);
    });
    if (!agregado) {
      newCarrito.push(pizzaforAdd);
    }
    carrito.description = newCarrito;
    localStorage.setItem("carritoPizzaDev", JSON.stringify(carrito));
    console.log({ carrito });
    console.log(newCarrito);
  };
  return (
    <Card sx={{ height: 450, maxWidth: 345, backgroundColor: "#FFD866" }}>
      <CardMedia component="img" height="200" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Grid container>
          <Typography variant="subtitle1" component="div">
            {description}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={onClickAdd}
        >
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
  );
}
