import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useDrag } from "react-dnd";

export const DragCard = ({ name, image }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "pet",
    item: { name, image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <Box
      className="pet-card"
      ref={dragRef}
      sx={{
        marginTop: 1,
        "& > span": {
          borderRadius: "100%",
        },
      }}
    >
      <Image alt={name} src={image} width="70%" height="70%" />
      {isDragging && ""}
    </Box>
  );
};
