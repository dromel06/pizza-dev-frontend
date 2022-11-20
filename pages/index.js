import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { Button, Stack } from "@mui/material";
import Image from "next/image";

import PrincipalText from "../public/assets/PrincipalText.svg";
import MaxCoupon from "../public/assets/MaxCoupon.svg";
import PizzaIndex from "../public/assets/PizzaIndex.png";
import NavBar from "../components/core/NavBar";

export default function Home() {
  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 150,
  };

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          gridColumnGap: "0px",
          gridRowGap: "0px",
          marginLeft: "0px",
          marginTop: "30px",
          overflow: "hidden",
        }}
      >
        <Stack sx={{ gridArea: "1 / 1 / 5 / 4" }}>
          <Image
            width={100}
            height={400}
            src={PrincipalText.src}
            alt="Convierte tu pizza en codigo"
          />
        </Stack>
        <Stack sx={{ gridArea: "3 / 3 / 4 / 5" }}>
          <Button
            id="ButtonPizza"
            href="./fabrica"
            className="ButtonIndex"
            sx={{
              color: "#f3738a",
              border: "2px",
              slant: ".5em",
              height: "61px",
            }}
          >
            CONSTRUYE TU PIZZA!!!
          </Button>
        </Stack>
        <Stack width={160} sx={{ gridArea: "1 / 5 / 6 / 6" }}>
          <motion.img
            width={700}
            src={PizzaIndex.src}
            animate={{ rotate: 360 }}
            transition={spinTransition}
          />
        </Stack>
        <Stack sx={{ gridArea: "5 / 1 / 6 / 3", marginTop: "10px" }}>
          <Image
            width={100}
            height={100}
            src={MaxCoupon.src}
            alt="Cupon 99.99%"
          />
        </Stack>
      </Box>
    </Box>
  );
}
