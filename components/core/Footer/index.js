import * as React from "react";
import { Typography, Container } from "@mui/material";
import { Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const pages = [
  { text: "INICIO", dir: "/" },
  { text: "PIZZAS", dir: "/pizzas" },
  { text: "CUPONES", dir: "/cupones" },
  { text: "FÁBRICA", dir: "/fabrica" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Footer = () => {
  return (
    <Grid
      mt={8}
      container
      width="100%"
      sx={{ backgroundColor: "#FFD866", minHeight: 150 }}
    >
      <Container>
        <Grid item xs={12} md={12} sx={{ fontSize: "24px", padding: 0 }}>
          Propiedad de Pizza Dev
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          mt={1}
          mb={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="https://github.com/ralphsebas"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} /> <Typography>Rafael Perez</Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          mb={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="https://github.com/xabi1320"
            underline="none"
            target="_blank"
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} /> <Typography>Javier Perez</Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          mb={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            href="https://github.com/dromel06"
            target="_blank"
            underline="none"
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} /> <Typography>Diomedes Díaz</Typography>
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
};
export default Footer;
