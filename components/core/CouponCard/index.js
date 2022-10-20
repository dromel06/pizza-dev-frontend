import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Notification from "../Notification";

export function CouponCard({ coupon: { img, description, co_id, price } }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationProps, setNotificationProps] = useState({});
  const [usedCoupon, setUsedCoupon] = useState(false);
  const onClickAdd = () => {
    var pizzaforAdd = {
      id: co_id,
      name: description,
      quantity: 1,
      amount: price,
      built: false,
      coupon: true,
    };

    let carrito = JSON.parse(localStorage.getItem("carritoPizzaDev"));
    setUsedCoupon(!!carrito?.description?.filter((c) => c.coupon === true));
    if (!usedCoupon) {
      if (carrito) {
        let agregado = false;
        const newCarrito = [];
        carrito?.description?.forEach((p) => {
          newCarrito.push(p);
        });
        if (!agregado) {
          newCarrito.push(pizzaforAdd);
        }
        carrito.description = newCarrito;
      } else {
        carrito = {
          description: [pizzaforAdd],
        };
      }
      setNotificationProps({
        message: "Cupon Utilizado",
        type: "success",
        notificationDuration: 1500,
      });
      setNotificationOpen(true);
      localStorage.setItem("carritoPizzaDev", JSON.stringify(carrito));
    } else {
      setNotificationProps({
        message: "Ya haz utiliado un cupón",
        type: "error",
        notificationDuration: 1500,
      });
      setNotificationOpen(true);
    }
  };
  return (
    <Card sx={{ height: 380, maxWidth: 345, backgroundColor: "#FFD866" }}>
      <CardMedia component="img" height="200" image={img} alt={description} />
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
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Button
          id={`addCupon-${co_id}`}
          onClick={onClickAdd}
          variant="contained"
          color="error"
          size="small"
        >
          Usar Cupón
        </Button>
      </CardActions>
      {notificationOpen && (
        <Notification
          {...notificationProps}
          onClose={() => setNotificationOpen(false)}
        />
      )}
    </Card>
  );
}
