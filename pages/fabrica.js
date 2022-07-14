import { Grid, Paper, Typography, Stack, Container } from "@mui/material";
import SalsasListDrag from "../components/core/SalsasListDrag";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropZone } from "../components/core/DropZone";

export default function Fabrica() {
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 150,
  };

  const salsas = [
    {
      name: "Salsa de Tomate",
      image:
        "https://st4.depositphotos.com/1855397/27155/i/450/depositphotos_271553660-stock-photo-texture-tomato-paste-ketchup-background.jpg",
    },
    {
      name: "Salsa Ranch",
      image:
        "https://pbs.twimg.com/ext_tw_video_thumb/1247184172004900864/pu/img/XDk5uUqaNGxd8225.jpg",
    },
  ];
  const ingredientList = [];

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <DropZone />

        <Grid container mt={3} gap="2rem">
          <Grid item xs={12} md={3}>
            <Paper sx={{ backgroundColor: "#FFD866", minHeight: "10vh" }}>
              <SalsasListDrag salsas={salsas} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper>
              <Stack width="100%">
                <Typography align="center">Fabrica</Typography>
                <DropZone />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ backgroundColor: "#FFD866" }}>
              <Stack width="100%">
                <Typography align="center">Adios</Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </DndProvider>
    </Container>
  );
}
