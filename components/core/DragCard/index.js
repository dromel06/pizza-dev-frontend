import React from "react";
import { useDrag } from "react-dnd";
import { Box } from "@mui/system";
import PlatoImg from "../../../assets/Plato.png";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";

export function DragCard({ id, name, image, empty = false }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: { id, name, image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Box
      ref={dragRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        align: "center",
      }}
    >
      <Typography align="center">{name}</Typography>
      <Box
        sx={{
          ZIndex: -1,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          mt: 3,
          ml: 2.8,
        }}
      >
        <Image alt={name} src={PlatoImg} width="100%" height="100%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          mb: 5,
          "& > span": { borderRadius: "100%" },
        }}
      >
        {!isDragging && (
          <Image alt={name} src={image} width="70%" height="70%" />
        )}
      </Box>
    </Box>
  );
}
