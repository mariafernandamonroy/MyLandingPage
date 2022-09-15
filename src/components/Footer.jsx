import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "azul.main",
        color:"blanco.main",
        paddingY: 2,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img id="logoFooter" src={logo} />

        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mt: 1,
            ml:2,
            display: "flex",
            fontFamily: "Mada",
            fontWeight: "bold",
            color: "blanco.main",
            textDecoration: "none",
          }}
        >
          María Fernanda Monroy
        </Typography>
      </Box>
    </Container>
  );
};
