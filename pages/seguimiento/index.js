import { Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Carrito({ createOrderUrl }) {
  const in_browser = typeof window !== "undefined";
  const [carrito, setCarrito] = useState({});

  const OnClickResetCart = () => {
    if (in_browser) {
      localStorage.setItem("carritoPizzaDev", JSON.stringify(pedido));
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

  useEffect(() => {
    if (in_browser) {
      setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
    }
  }, [in_browser]);

  useEffect(() => {
    (async () => {
      const {
        data: { url },
      } = await axios.post(createOrderUrl, serializerData(carrito));
      setUrlYappy(url);
    })();
  }, [createOrderUrl, carrito]);

  return <Container>Compra Exitosa</Container>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      createOrderUrl: "https://pizzadev-api.herokuapp.com/api/v1/orders/",
    },
  };
}
