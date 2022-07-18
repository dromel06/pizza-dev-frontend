import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import LogoPizza from "../../../public/assets/PizzaLogo.svg";
import LogoTexto from "../../../public/assets/TextoLogo.svg";
import kartSvg from "../../../public/assets/cart.svg";
import { Link } from "@mui/material";

const pages = [
  { text: "INICIO", dir: "/" },
  { text: "PIZZAS", dir: "/pizzas" },
  { text: "CUPONES", dir: "/cupones" },
  { text: "FABRICA", dir: "/fabrica" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFD866" }}>
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <picture>
            <img src={LogoPizza.src} width={64} height={60} alt="Logo Pizza" />
            <img
              src={LogoTexto.src}
              width={250}
              height={60}
              alt="Texto Pizza"
            />
          </picture>

          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Link href={pages.dir}>
                    <Typography textAlign="center">{page.text}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                key={page.text}
              >
                <Link
                  href={page.dir}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  underline="none"
                  sx={{
                    my: 2,
                    color: "#505050",
                    display: "block",
                    mx: 1,
                  }}
                >
                  {page.text}
                </Link>
                <Box
                  sx={{
                    backgroundColor: "#505050",
                    borderRadius: "50px",
                    height: "40px",
                    width: "2px",
                  }}
                />
              </Box>
            ))}
            <Box
              sx={{
                marginLeft: "5px",
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}
            >
              <IconButton href="./carrito">
                <ShoppingCartOutlinedIcon color="#505050" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
