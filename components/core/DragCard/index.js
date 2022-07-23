import React from "react";
import { useDrag } from "react-dnd";
import { Box } from "@mui/system";
import PlatoImg from "../../../public/assets/Plato.png";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";

export function DragCard({ id, name, image, i_id }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: { id, name, image, i_id },
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
      <Box
        sx={{
          ZIndex: -1,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
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
          mb: 1,
          "& > span": { borderRadius: "100%" },
        }}
      >
        {!isDragging && (
          <Image alt={name} src={image} width="70%" height="70%" />
        )}
      </Box>
      <Typography align="center">{name}</Typography>
    </Box>
  );
}
