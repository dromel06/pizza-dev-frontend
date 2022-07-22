import { fontSize } from "@material-ui/system";
import { Button, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function QuantityPizza({ item }) {
  const [quantity, setQuantity] = useState(0);
  let carrito = JSON.parse(localStorage.getItem("carritoPizzaDev"));

  useEffect(() => {
    setQuantity(item?.quantity);
  }, [item?.quantity]);

  useEffect(() => {}, [quantity]);
  // if (carrito) {
  //   let agregado = false;
  //   console.log({ carrito });
  //   const newCarrito = [];
  //   carrito.description.forEach((p) => {
  //     let quantity = p.quantity;
  //     if (p.id) {
  //       if (p.id === pid) {
  //         quantity += 1;
  //         agregado = true;
  //       }
  //     }
  //     p.quantity = quantity;
  //     newCarrito.push(p);
  //   });
  //   if (!agregado) {
  //     newCarrito.push(pizzaforAdd);
  //   }
  //   carrito.description = newCarrito;
  // } else {
  //   carrito = {
  //     description: [pizzaforAdd],
  //   };
  // }

  return (
    <Box>
      <Button
        sx={{ height: "26px", fontSize: 24 }}
        variant="contained"
        color="error"
      >
        {quantity > 1 ? "-" : <DeleteIcon />}
      </Button>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={quantity}
        sx={{
          width: 70,
          padding: 0,
          margin: "0 3px 0 3px",

          input: {
            textAlign: "center",
            fontSize: 16,
            height: "10px",
            padding: 1,
          },
        }}
      />
      <Button
        sx={{ height: "26px", fontSize: 24 }}
        variant="contained"
        color="success"
      >
        +
      </Button>
    </Box>
  );
}
