import {
  Grid,
  Paper,
  Typography,
  Stack,
  Container,
  Button,
  OutlinedInput,
} from "@mui/material";
import { useEffect, useState } from "react";
import ItemCart from "../components/core/Itemcart";
import PizzasTableCart from "../components/core/PizzasTableCart";
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
      <Typography variant="h2" align="center" mt={3}>
        Carrito de Pizzas
      </Typography>
      <Stack>
        {!carrito ? (
          <Typography variant="h3">Carrito de Pizza Vacio</Typography>
        ) : (
          <Grid container mt={5} spacing={3}>
            <Grid item xs={12} direction="column" md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PizzasTableCart pizzas={carrito?.description} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  direction="row"
                  justifyContent="right"
                >
                  <Button variant="contained">Comprar</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ padding: 5, backgroundColor: "#FFD866" }}>
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
                      value={carrito?.customer_data?.name}
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
                      value={carrito?.customer_data?.phone}
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
                      value={carrito?.customer_data?.email}
                    />
                  </Grid>
                  <Grid item xs={12} width="100%">
                    <Button variant="contained">Guardar</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Button onClick={OnClickResetCart}>Reiniciar Carrito</Button>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}
