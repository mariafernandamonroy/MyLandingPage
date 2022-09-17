import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { menuTitles } from "../database/menu";
import { MenuOptions } from "./MenuOptions";
import { HamburgerMenu } from "./HamburgerMenu";
import logo from "../assets/logo.png";

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container sx={{ backgroundColor: "azul.main" }} maxWidth="full">
        <Toolbar disableGutters>
          <img id="logoNavBar" src={logo} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Mada",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "blanco.main",
              textDecoration: "none",
            }}
          >
            María Fernanda Monroy
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
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

            {/* Configuracion para pantalla pequeña */}
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
              {menuTitles.map((item) => (
                <HamburgerMenu
                  key={item}
                  item={item}
                  handle={handleCloseNavMenu}
                />
              ))}
            </Menu>
          </Box>

          {/* Configuración para pantalla grande */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuTitles.map((item) => (
              <MenuOptions key={item} item={item} />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
