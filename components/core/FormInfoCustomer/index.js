import React, { useState, useEffect } from "react";

import { Grid, Typography, Button, OutlinedInput } from "@mui/material";
import Notification from "../Notification";

export default function FormInfoCustomer() {
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [notificationProps, setNotificationProps] = React.useState({});

  const [userCustomer, setUserCustomer] = useState({
    name: "Hola",
    phone: 123,
    email: 123,
  });
  const in_browser = typeof window !== "undefined";

  useEffect(() => {
    if (in_browser) {
      setUserCustomer(
        JSON.parse(localStorage.getItem("carritoPizzaDev")).customer_data
      );
    }
  }, [in_browser]);

  const handleUserInfoChange = (event, inputType) => {
    setUserCustomer((userCustomer) => {
      return { ...userCustomer, [inputType]: event.target.value };
    });
  };

  const onClickSave = () => {
    let carrito = JSON.parse(localStorage.getItem("carritoPizzaDev"));
    carrito.customer_data = userCustomer;
    localStorage.setItem("carritoPizzaDev", JSON.stringify(carrito));
    setNotificationProps({
      message: "Informacion del Cliente Guardada",
      type: "success",
      notificationDuration: 4000,
    });
    setNotificationOpen(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} width="100%">
        <Typography variant="string">Nombre</Typography>
        <OutlinedInput
          required
          id="name"
          name="name"
          type="name"
          size="small"
          sx={{
            height: "32px",
            width: "100%",
            backgroundColor: "#fff",
          }}
          onChange={(event) => handleUserInfoChange(event, "name")}
          value={userCustomer?.name}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="string">Telefono</Typography>
        <OutlinedInput
          required
          id="telefono"
          name="telefono"
          type="telefono"
          size="small"
          sx={{
            height: "32px",
            width: "100%",
            backgroundColor: "#fff",
          }}
          onChange={(event) => handleUserInfoChange(event, "phone")}
          value={userCustomer?.phone}
        />
      </Grid>
      <Grid item xs={12} width="100%">
        <Typography variant="string">Email</Typography>
        <OutlinedInput
          required
          id="email"
          name="email"
          type="email"
          size="small"
          sx={{
            height: "32px",
            width: "100%",
            backgroundColor: "#fff",
          }}
          onChange={(event) => handleUserInfoChange(event, "email")}
          value={userCustomer?.email}
        />
      </Grid>
      <Grid item xs={12} width="100%">
        <Button onClick={onClickSave} variant="contained">
          Guardar
        </Button>
      </Grid>
      {notificationOpen ? (
        <Notification
          {...notificationProps}
          onClose={() => setNotificationOpen(false)}
        />
      ) : null}
    </Grid>
  );
}
