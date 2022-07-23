import { Container, Button, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
export default function Seguimiento({ getOrdersUrl, getOrderUrl }) {
  const [ordersList, setOrdersList] = useState([]);
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState("baking");
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

  const router = useRouter();

  const { id = "" } = router.query;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(getOrdersUrl);
      setOrdersList(data.orders);
    })();
  }, [getOrdersUrl]);

  useEffect(() => {
    if (ordersList) {
      localStorage.setItem("carritoPizzaDev", JSON.stringify(pedido));

      (async () => {
        let idOrder = ordersList.filter((e) => e.orderNumber == id);

        const { data } = await axios.get(
          getOrderUrl.replace("{o_id}", idOrder[0]?.o_id)
        );
        setOrder(data.order);
      })();
    }
  }, [ordersList, id, getOrderUrl]);

  useEffect(() => {
    setOrderStatus(order?.status);
    // setOrderStatus("baking");\
  }, [order]);

  // setInterval(() => {
  //   if (ordersList) {
  //     (async () => {
  //       let idOrder = ordersList.filter((e) => e.orderNumber == id);

  //       const { data } = await axios.get(
  //         getOrderUrl.replace("{o_id}", idOrder[0]?.o_id)
  //       );
  //       setOrder(data.order);
  //     })();
  //   }
  // }, 30000);
  // clearInterval();

  //TODO :
  // -Reparar el set Interval
  return (
    <Container>
      {!!order?.orderNumber ? (
        <Stack>
          <Typography variant="h3" mt={3} align="center">
            Seguimiento del pedido #{order.orderNumber}
          </Typography>
          {orderStatus === "preparing" && (
            <Grid container>
              <Grid item xs={12} align="center">
                <Image
                  src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658455262/ub07qhzogwllius0honm.gif"
                  alt="Preparando Pizza"
                  width={888}
                  height={500}
                  unoptimized={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="error"
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                    <Typography variant="h5" align="center" mt={1}>
                      Preparando
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="inherit"
                      variant="determinate"
                      value={0}
                      sx={{
                        height: 30,
                        borderRadius: 10,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="inherit"
                      variant="determinate"
                      value={0}
                      unoptimized={true}
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {orderStatus === "baking" && (
            <Grid container>
              <Grid item xs={12} align="center">
                <Image
                  src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658455262/ub07qhzogwllius0honm.gif"
                  alt="Preparando Pizza"
                  unoptimized={true}
                  width={888}
                  height={500}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      unoptimized={true}
                      value={100}
                      sx={{
                        height: 30,
                        borderRadius: 10,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="error"
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                    <Typography variant="h5" align="center" mt={1}>
                      Horneando
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <LinearProgress
                      color="inherit"
                      variant="determinate"
                      value={0}
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {orderStatus === "delivery" && (
            <Grid container>
              <Grid item xs={12} height={500} align="center" sx={{}}>
                <Stack height={500} width={200} justifyContent="center">
                  <Image
                    src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658453433/pptvlkanoouwcmnvfnbf.gif"
                    unoptimized={true}
                    alt="en camino"
                    width={250}
                    height={200}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      value={100}
                      sx={{
                        height: 30,
                        borderRadius: 10,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      value={100}
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="error"
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                    <Typography variant="h5" align="center" mt={1}>
                      En camino
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {orderStatus === "completed" && (
            <Grid container>
              <Grid item xs={12} height={500} align="center" sx={{}}>
                <Stack height={500} width={500} justifyContent="center">
                  <Image
                    src="https://res.cloudinary.com/xabi-api-cloud/image/upload/v1658453489/ru7tgliollwt0chhopem.gif"
                    alt="Preparando Pizza"
                    unoptimized={true}
                    width={500}
                    height={500}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      value={100}
                      sx={{
                        height: 30,
                        borderRadius: 10,
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      value={100}
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                    <Typography variant="h5" align="center" mt={1}>
                      Pizza Entregada
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      value={100}
                      sx={{ height: 30, borderRadius: 10 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Stack>
      ) : (
        <Typography>No Existe este pedido</Typography>
      )}
    </Container>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      getOrdersUrl: "https://pizzadev-api.herokuapp.com/api/v1/orders",
      getOrderUrl: "https://pizzadev-api.herokuapp.com/api/v1/orders/{o_id}",
    },
  };
}
