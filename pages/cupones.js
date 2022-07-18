import React, { useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PizzaFondoImage from "../public/assets/MaxCoupon.svg";
import { CouponCard } from "../components/core/CouponCard";
import { PizzaPrefabcard } from "../components/core/PizzaPrefabCard";
import axios from "axios";

export default function Pizzas({ couponListUrl }) {
  const [couponsList, setcouponsList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(couponListUrl);
      setcouponsList(data.coupons);
    })();
  }, [couponListUrl]);
  console.log(couponsList);

  return (
    <Container>
      <Typography align="center" variant="h2">
        Lista de Cupones
      </Typography>
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{ display: "flex", alignContent: "center" }}
      >
        {couponsList?.map((coupon) => {
          return (
            <Grid item key={coupon?.co_id} xs={3} mt={2} md={4}>
              <CouponCard coupon={coupon} />
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
      couponListUrl: "https://pizzadev-api.herokuapp.com/api/v1/coupons/",
    },
  };
}
