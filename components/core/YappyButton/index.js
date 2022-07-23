import React, { useEffect, useState } from "react";
import Image from "next/image";
import MaderaImage from "../../../public/assets/madera.png";
import MasaPizzaImage from "../../../public/assets/masaPizza.png";
import PizzaFondoImage from "../../../public/assets/pizzaFondo.png";

import { Button, Stack } from "@mui/material";

const onClickClearCart = () => {
  const carrito = JSON.parse(localStorage.getItem("carritoPizzaDev"));
  let newCarrito = {
    ...carrito,
    description: [],
    total_amount: 0,
  };
  localStorage.setItem("carritoPizzaDev", JSON.stringify(newCarrito));
};

export function YappyButton({ url }) {
  return (
    <Button href={url} target="_blank" variant="outlined">
      Pagar Con{"  "}
      <Stack ml={1}>
        <Image
          src="https://cascoyogapanama.com/wp-content/uploads/2020/05/yappy-BIG-Logo.png"
          alt="Yappy"
          width={20}
          height={20}
        />
      </Stack>
    </Button>
  );
}
