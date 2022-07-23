import React, { useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { CouponCard } from "../components/core/CouponCard";
import Image from "next/image";
import axios from "axios";

export default function Pizzas({ couponListUrl }) {
  const [couponsList, setcouponsList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(couponListUrl);
      setcouponsList(data.coupons);
    })();
  }, [couponListUrl]);

  return (
    <Container>
      <Typography align="center" variant="h2" mt={2}>
        Lista de Cupones
      </Typography>
      <Grid
        container
        spacing={2}
        mt={1}
        sx={{ display: "flex", alignContent: "center" }}
      >
        {couponsList.length > 0 ? (
          couponsList?.map((coupon) => {
            return (
              <Grid item key={coupon?.co_id} xs={12} mt={2} md={4}>
                <CouponCard coupon={coupon} />
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
      couponListUrl: "https://pizzadev-api.herokuapp.com/api/v1/coupons/",
    },
  };
}
