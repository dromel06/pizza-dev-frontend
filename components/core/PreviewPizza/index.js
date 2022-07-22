import React, { useEffect, useState } from "react";
import Image from "next/image";
import MaderaImage from "../../../public/assets/madera.png";
import MasaPizzaImage from "../../../public/assets/masaPizza.png";
import PizzaFondoImage from "../../../public/assets/pizzaFondo.png";

import { Stack } from "@mui/material";

import { Container } from "@mui/system";
import { Box } from "@mui/material";

export function PreviewPizza({ pizza }) {
  useEffect(() => {
    console.log(pizza);
  }, [pizza]);

  return (
    <Stack>
      <Box sx={{ position: "absolute", zIndex: -100 }}>
        <Image
          src={MaderaImage}
          alt="Tabla de Madera"
          width={"550"}
          height={"480"}
        />
      </Box>
      {pizza ? (
        <Box sx={{ position: "absolute", zIndex: -90 }}>
          <Image
            src={MasaPizzaImage}
            alt="Masa Pizza"
            width={"480%"}
            height={"480%"}
          />
        </Box>
      ) : (
        <Box sx={{ position: "absolute", zIndex: -80, mt: 2, ml: 2 }}>
          <Image
            src={PizzaFondoImage}
            alt="Masa Pizza"
            width={"450%"}
            height={"450%"}
          />
        </Box>
      )}
    </Stack>
  );
}
