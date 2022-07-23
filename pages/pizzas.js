import React, { useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { PizzaPrefabcard } from "../components/core/PizzaPrefabCard";
import axios from "axios";
import NavBar from "../components/core/NavBar";
import Image from "next/image";

export default function Pizzas({ pizzasListUrl }) {
  const [pizzasList, setPizzasList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(pizzasListUrl);
      setPizzasList(data.pizzas);
    })();
  }, [pizzasListUrl]);

  return (
    <Container>
      <Typography align="center" variant="h2" mt={2}>
        Lista de Pizzas
      </Typography>
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{ alignItems: "center", alignContent: "center" }}
      >
        {pizzasList.length > 0 ? (
          pizzasList?.map((pizza) => {
            return (
              <Grid item key={pizza.id} mt={2} md={4}>
                <PizzaPrefabcard pizza={pizza} />
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12} align="center">
            <Image
              src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658453489/ru7tgliollwt0chhopem.gif"
              width={400}
              height={400}
              alt="Pizza Carga"
              unoptimized={true}
            />
          </Grid>
        )}
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
