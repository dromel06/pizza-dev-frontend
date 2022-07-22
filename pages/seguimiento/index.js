import { Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
export default function Carrito({ YappyButtonUrl }) {
  const in_browser = typeof window !== "undefined";
  const [carrito, setCarrito] = useState({});
  const [yappyButton, setYappyButton] = useState("");
  const [urlYappy, setUrlYappy] = useState(undefined);
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
      setCarrito(JSON.parse(localStorage.getItem("carritoPizzaDev")));
    }
    if (urlYappy !== undefined) {
      setYappyButton(
        <Button target="_blank" href={urlYappy}>
          Pagar Con Yappy
        </Button>
      );
    }
  }, [in_browser, urlYappy]);

  return <Container>Compra Exitosa</Container>;
}
