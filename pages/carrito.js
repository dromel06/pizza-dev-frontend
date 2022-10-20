import {
  Grid,
  Paper,
  Typography,
  Stack,
  Container,
  Button,
} from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import PizzasTableCart from "../components/core/PizzasTableCart";
import Image from "next/image";
import FormInfoCustomer from "../components/core/FormInfoCustomer";
import axios from "axios";
import { YappyButton } from "../components/core/YappyButton";
export default function Carrito({ YappyButtonUrl }) {
  const in_browser = typeof window !== "undefined";
  const [carrito, setCarrito] = useState({});
  const [yappyButton, setYappyButton] = useState("");
  const [urlYappy, setUrlYappy] = useState(undefined);

  const [pedido, setPedido] = useState({
    customer_data: {
      name: "",
      phone: "",
      email: "",
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
  });
  const OnClickResetCart = () => {
    if (in_browser) {
      localStorage.setItem("carritoPizzaDev", JSON.stringify(pedido));
      onSuccess();
    }
  };

  const serializerData = (carrito) => {
    return {
      customerData: carrito.customer_data,
      delivery: carrito.delivery,
      description: carrito.description,
      totalAmount: carrito.total_Amount,
    };
  };

  const onClickShop = () => {
    (async () => {
      const {
        data: { url },
      } = await axios.post(YappyButtonUrl, serializerData(carrito));
      setUrlYappy(url);
    })();
  };

  useEffect(() => {
    if (in_browser) {
      if (localStorage.getItem("carritoPizzaDev")) {
        setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
      } else {
        localStorage.setItem("carritoPizzaDev", JSON.stringify(pedido));
      }
    }
    if (urlYappy !== undefined) {
      setYappyButton(<YappyButton url={urlYappy} />);
    }
  }, [in_browser, urlYappy, pedido]);

  const onSuccess = useCallback(() => {
    setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
    const description = [];
    description = carrito?.description?.map((p) => {
      if (p.quantity > 0) {
        return p;
      }
      let newCarrito = carrito;
      newCarrito.description = description;
      localStorage.setItem("carritoPizzaDev", JSON.stringify(newCarrito));
    });
  }, [carrito]);

  return (
    <Container sx={{ minHeight: "70vh" }}>
      <Typography variant="h2" align="center" mt={3}>
        Carrito de Pizzas
      </Typography>
      <Stack>
        <Grid container mt={5} spacing={3}>
          {carrito?.description !== undefined &&
          carrito?.description?.length <= 0 ? (
            <Grid
              item
              xs={12}
              sx={{ direction: "column" }}
              md={8}
              align="center"
            >
              <Typography>OH OH No hay Pizzas!</Typography>
              <Image
                src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658455826/aveiysqydtdd5dzhfihx.gif"
                alt="Sin Pizza"
                width={350}
                height={320}
                unoptimized={true}
              ></Image>
            </Grid>
          ) : (
            <Grid item xs={12} sx={{ direction: "column" }} md={8}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PizzasTableCart
                    pizzas={carrito?.description}
                    onSuccess={onSuccess}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Button
                    id="borrarTodoButton"
                    onClick={OnClickResetCart}
                    variant="contained"
                    color="error"
                  >
                    Borrar Todo
                  </Button>

                  {!yappyButton && (
                    <Button
                      onClick={onClickShop}
                      variant="contained"
                      id="comprarButton"
                    >
                      Comprar
                    </Button>
                  )}
                  {yappyButton}
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: 5, backgroundColor: "#FFD866" }}>
              <FormInfoCustomer />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      YappyButtonUrl:
        "https://pizzadev-api.herokuapp.com/api/v1/orders/pagosbg",
    },
  };
}
