import { Box, Button, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import react from "../assets/react.svg";

export const PerfilPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "verde.main",
        paddingTop: 5,
        paddingBottom: 8,
        paddingX: { xs: 5, md: 20 },
      }}
      maxWidth="full"
    >
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} sm={6}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "mada",
              fontWeight: "bold",
              color: "amarillo.main",
              fontSize: { xs: 40, md: 60 },
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            Desarrolladora Frontend con React JS
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "mada",
              fontWeight: "regular",
              color: "blanco.main",
              fontSize: { xs: 20, md: 40 },
              marginBottom: 10,
            }}
          >
            Soy apasionada por el crear páginas web llenas de innovación.
            Actualmente me encuentro muy interesada por aprender más de esta
            área y mejorar mis conocimientos en diseño y desarrollo.
          </Typography>
        </Grid>
        <Grid
          sx={{ textAlign: { xs: "center", md: "right" }, marginTop: 10 }}
          item
          xs={12}
          sm={6}
        >
          <Box>
            <img src={react} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        sx={{
          textAlign: { xs: "center", md: "left" },
          marginBottom: 12,
          marginTop: 10,
        }}
        item
        xs={12}
        sm={6}
      >
        <Box>
          <Button
            variant="contained"
            sx={{
              borderRadius: 5,
              backgroundColor: "blanco.main",
              color: "negro.main",
              textTransform: "none",
              fontWeight: "bold",
              marginTop: 2,
              fontSize: { xs: 13, sm: 20 },
              ":hover": {
                backgroundColor: "amarillo.main", // theme.palette.primary.main
                color: "negro.main",
              },
            }}
            href="https://github.com/mariafernandamonroy"
            target="_blank"
            startIcon={<LinkedInIcon sx={{ color: "azul.main" }} />}
          >
            LinkedIn
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};
