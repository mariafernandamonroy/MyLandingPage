import { Box, Container, Typography } from "@mui/material";
import { PortafolioCarousel } from "../components/PortafolioCarousel";
import { proyectos } from "../database/proyectos";

export const ProyectosPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "blanco.main",
        paddingY: 12,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "mada",
          fontWeight: "bold",
          color: "negro.main",
          fontSize: { xs: 40, md: 60 },
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Portafolio
      </Typography>
      <PortafolioCarousel/>
      
    </Container>
  );
};
