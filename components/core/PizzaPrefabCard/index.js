import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export function PizzaPrefabcard({ pizza: { pid, name, img, description } }) {
  return (
    <Card sx={{ height: 450, maxWidth: 345, backgroundColor: "#FFD866" }}>
      <CardMedia component="img" height="200" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Grid container>
          <Typography variant="subtitle1" component="div">
            {description}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" size="small">
          Agregar al Carrito
        </Button>
      </CardActions>
    </Card>
  );
}
