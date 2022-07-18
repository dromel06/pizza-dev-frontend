import {
  Grid,
  Paper,
  Typography,
  Stack,
  Container,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import ItemCart from "../components/core/Itemcart";

export default function Carrito() {
  const in_browser = typeof window !== "undefined";
  const [carrito, setCarrito] = useState({});
  const pedido = {
    customer_data: {
      name: "Diomedes Díaz",
      phone: "67893405",
      email: "admin1@admin.com",
    },
    delivery: {
      method: "delivery",
      location: {
        ln: 9.032197938400161,
        lat: -79.5019754329132,
      },
      payment_method: "Yappy",
    },
    description: [],
    total_Amount: 33.98,
  };
  const OnClickResetCart = () => {
    if (in_browser) {
      localStorage.setItem("carritoPizzaDev", JSON.stringify(pedido));
    }
  };

  useEffect(() => {
    if (in_browser) {
      setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
    }
  }, [in_browser]);

  return (
    <Container>
      <Typography variant="h2" align="center">
        Carrito de Pizzas
      </Typography>
      <Stack>
        {!carrito ? (
          <Typography variant="h3">Carrito de Pizza Vacio</Typography>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ padding: 5 }}>
                Nombre: {carrito?.customer_data?.name}
                <br />
                Telefono: {carrito?.customer_data?.phone}
                <br />
                email: {carrito?.customer_data?.email}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 5 }}>
                {carrito?.description?.map((item) => {
                  console.log(item);
                  return <ItemCart key={item?.id} item={item} />;
                })}
              </Paper>
            </Grid>
            <Button onClick={OnClickResetCart}>Reiniciar Carrito</Button>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}
