import { fontSize } from "@material-ui/system";
import { Button, Box, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export function QuantityPizza({ item, onSuccess }) {
  const [quantity, setQuantity] = useState(0);
  const [carrito, setCarrito] = useState({});

  useEffect(() => {
    setQuantity(item?.quantity);
    setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
  }, [item, setQuantity]);

  const callCart = useCallback(() => {
    setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
    const description = [];
    description = carrito?.description?.map((p) => {
      if (p?.quantity > 0) {
        return p;
      }
    });
    let newCarrito = carrito;
    description = description.filter((p) => p != null);
    newCarrito.description = description;

    localStorage.setItem("carritoPizzaDev", JSON.stringify(newCarrito));
  }, [carrito]);

  const onClickChangeQuantity = (c) => {
    const newCarrito = [];
    carrito?.description?.forEach((p) => {
      let quanti = p.quantity;
      if (p.name === item?.name) {
        quanti += c;
        setQuantity(quanti);
      }
      p.quantity = quanti;

      if (p.quantity >= 1) {
        newCarrito.push(p);

        callCart();
      }
    });
    setCarrito({ ...carrito, description: newCarrito });

    localStorage.setItem("carritoPizzaDev", JSON.stringify(carrito));
    callCart();
    onSuccess();
  };

  return (
    <Box>
      <Button
        sx={{ height: "26px", fontSize: 24 }}
        variant="contained"
        color="error"
        onClick={() => {
          onClickChangeQuantity(-1);
        }}
      >
        {quantity > 1 ? "-" : <DeleteIcon />}
      </Button>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={quantity}
        disabled
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
      {!item.coupon && (
        <Button
          sx={{ height: "26px", fontSize: 24 }}
          variant="contained"
          color="success"
          onClick={() => {
            onClickChangeQuantity(1);
          }}
        >
          +
        </Button>
      )}
    </Box>
  );
}
