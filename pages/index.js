import { Box } from '@mui/system'
import { motion } from 'framer-motion'
import { Button, Stack } from '@mui/material'

import NavBar from '../components/core/NavBar'

import PrincipalText from '../assets/PrincipalText.svg'
import MaxCoupon from '../assets/MaxCoupon.svg'
import PizzaIndex from '../assets/PizzaIndex.png'


export default function Home() {

  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 150,
  }


  return (
    <Box>
      <NavBar />


      <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridColumnGap: "0px",
        gridRowGap: "0px",
        marginLeft: "20px",
        marginTop: "50px"
      }} >
        <Stack sx={{ gridArea: "1 / 1 / 5 / 4" }}>
          <img width={"800"} src={PrincipalText.src} />
        </Stack>
        <Stack sx={{ gridArea: "3 / 3 / 4 / 5" }}>
          <Button className="ButtonIndex" sx={{ color:"#f3738a", border:"2px", slant:".5em" }} >CONSTRUYE TU PIZZA</Button>
        </Stack>
        <Stack width={160} sx={{ gridArea: "1 / 5 / 6 / 6" }}>
          <motion.img width={700} src={PizzaIndex.src}
            animate={{ rotate: 360 }}
            transition={spinTransition}
             />
        </Stack>
        <Stack sx={{ gridArea: "5 / 1 / 6 / 3", marginTop: "10px" }}>
          <img width={400} src={MaxCoupon.src} />
        </Stack>
      </Box>

    </Box>
  )
}
