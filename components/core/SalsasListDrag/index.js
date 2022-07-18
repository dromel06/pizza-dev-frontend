import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import PlatoImg from "../../../public/assets/Plato.png";

import { Link, Grid, Container, Stack } from "@mui/material";
import { DragCard } from "../DragCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const SalsasListDrag = ({ salsas }) => {
  return (
    <Container>
      <Stack width="100%" display="flex">
        <Box sx={{ borderBottom: "4px solid #000", mt: 2 }}>
          <Typography align="center">SALSAS</Typography>
        </Box>
      </Stack>
      <Grid container>
        {salsas.map((salsa) => (
          <Grid
            item
            xs={6}
            md={12}
            key={salsa.name}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
              mb: 3,
            }}
          >
            <Typography align="center">{salsa.name}</Typography>

            <Box
              sx={{
                ZIndex: -1,
                position: "absolute",
                marginTop: "16px",
              }}
            >
              <Image
                alt={salsa.name}
                src={PlatoImg}
                width="100%"
                height="100%"
              />
            </Box>
            <Box>
              <DragCard drag name={salsa.name} image={salsa.image} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SalsasListDrag;
