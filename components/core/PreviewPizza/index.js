import React, { useEffect, useState } from "react";
import Image from "next/image";
import MaderaImage from "../../../public/assets/madera.png";
import MasaPizzaImage from "../../../public/assets/masaPizza.png";
import PizzaFondoImage from "../../../public/assets/pizzaFondo.png";

import { Stack } from "@mui/material";

import { Box } from "@mui/material";
import { ClassNames } from "@emotion/react";

export function PreviewPizza({ pizzaIngredients }) {
  // useEffect(() => {
  //   console.log(pizzaIngredients);
  // }, [pizzaIngredients]);

  return (
    <Stack>
      {pizzaIngredients.map((ingredient, index) => (
        <Box key={ingredient.id}>
          {index < 2 ? (
            <Box
              sx={{
                position: "absolute",
                zIndex: { index },
                width: 500,
                height: 500,
              }}
            >
              <Image src={ingredient.img} alt={ingredient.name} layout="fill" />
            </Box>
          ) : (
            <Box
              sx={{
                position: "absolute",
                zIndex: { index },
                width: 280,
                height: 280,
                marginTop: 12,
                marginLeft: 10,
                "& .ingre": {
                  borderRadius: 100,
                },
              }}
            >
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                className="ingre"
                width={300}
                height={300}
              />
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
}
