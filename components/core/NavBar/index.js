import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import LogoPizza from '../../../assets/PizzaLogo.svg'
import LogoTexto from '../../../assets/TextoLogo.svg'
import kartSvg from '../../../assets/cart.svg'
import { Link } from '@mui/material';




const pages = ['INICIO', 'PIZZAS', 'CUPONES', 'NOSOTROS'];
const dir = ['/', '/pizzas', '/cupones', '/nosotros']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={LogoPizza.src} />
          <img src={LogoTexto.src} />

          <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={pages}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>

                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, }}>

          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link
                  href={pages}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#505050', display: 'block' }}
                >
                  {page}
                </Link>
                <Box sx={{ backgroundColor: "#505050", borderRadius: "50px", height: "40px", width: "2px" }} />
              </Box>
            ))}
            <Box sx={{ marginLeft: "5px", display: "flex" }}>
              <img width={40} src={kartSvg.src} />
            </Box>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
