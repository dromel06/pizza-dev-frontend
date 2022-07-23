import { Container, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Carrito({ createOrderUrl }) {
  const in_browser = typeof window !== "undefined";
  const [carrito, setCarrito] = useState({});
  const [order, setOrder] = useState({});
  const router = useRouter();
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
      const { data } = await axios.post(
        createOrderUrl,
        serializerData(carrito)
      );
      setOrder(data.order);
    })();
  }, [createOrderUrl, carrito]);
  console.log(order.orderNumber);
  useEffect(() => {
    if (order.orderNumber !== undefined) {
      router.push(`seguimiento/${order.orderNumber}`);
    }
  }, [order, router]);

  return (
    <Container sx={{ minHeight: "70vh" }}>
      <Typography> Compra Exitosa</Typography>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      createOrderUrl: "https://pizzadev-api.herokuapp.com/api/v1/orders/",
    },
  };
}
