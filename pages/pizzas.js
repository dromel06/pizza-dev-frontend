import React, { useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PizzaFondoImage from "../assets/PizzaIndex.png";
import { PizzaPrefabcard } from "../components/core/PizzaPrefabCard";
import axios from "axios";

export default function Pizzas({ pizzasListUrl }) {
  const [pizzasList, setPizzasList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(pizzasListUrl);
      setPizzasList(data.pizzas);
    })();
  }, [pizzasListUrl]);
  console.log(pizzasList);

  return (
    <Container>
      <Typography align="center" variant="h2">
        Lista de Pizzas
      </Typography>
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{ alignItems: "center", alignContent: "center" }}
      >
        {pizzasList?.map((pizza) => {
          return (
            <Grid item key={pizza.id} mt={2} md={4}>
              <PizzaPrefabcard pizza={pizza} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      pizzasListUrl: "https://pizzadev-api.herokuapp.com/api/v1/pizzas/",
    },
  };
}
