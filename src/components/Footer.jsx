import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundcolor: "azul.main",
        paddingY: 2,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Box>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{ mt: 1, ml: 2, display: "flex", fontFamily: "Mada", fontWeight:"bold",color:"negro.main", textDecoration:"none"}}
        >
          María Fernanda Monroy
        </Typography>
      </Box>
    </Container>
  );
};
