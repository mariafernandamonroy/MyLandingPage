import { Box, Button, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import foto from "../assets/foto.png";

export const InicioPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "azul.main",
        paddingTop: 20,
        paddingBottom: 10,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Grid container>
        <Grid sx={{ textAlign: "center" }} item xs={12} sm={12}>
          <Box>
            <img id="foto" src={foto} />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid sx={{ textAlign: "center" }} item xs={12} sm={12}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "mada",
              fontWeight: "bold",
              color: "blanco.main",
              fontSize: { xs: 42, md: 60 },
            }}
          >
            Hola! Soy MaFe
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "mada",
              fontWeight: "semibold",
              color: "rosado.main",
              fontSize: { xs: 46, md: 64 },
              marginBottom: 2,
            }}
          >
            Trabajemos juntos
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 5,
              backgroundColor: "blanco.main",
              color: "negro.main",
              textTransform: "none",
              fontWeight: "bold",
            }}
            href="https://github.com/mariafernandamonroy"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
