import { Grid, Paper, Typography, Stack, Container } from "@mui/material";
import SalsasListDrag from "../components/core/SalsasListDrag";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropZone } from "../components/core/DropZone";
import { useState } from "react";

export default function Fabrica() {
  const [ingredientesList, setIngredienteList] = useState([
    {
      id: 1,
      name: "Salsa de Tomate",
      type: "salsa",
      image:
        "https://st4.depositphotos.com/1855397/27155/i/450/depositphotos_271553660-stock-photo-texture-tomato-paste-ketchup-background.jpg",
    },
    {
      id: 2,
      name: "Salsa Ranch",
      type: "salsa",
      image:
        "https://pbs.twimg.com/ext_tw_video_thumb/1247184172004900864/pu/img/XDk5uUqaNGxd8225.jpg",
    },
  ]);

  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <Grid container mt={3} gap="2rem">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Fabirca de Pizzas
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DropZone ingredientes={ingredientesList} />
          </Grid>
        </Grid>
      </DndProvider>
    </Container>
  );
}
