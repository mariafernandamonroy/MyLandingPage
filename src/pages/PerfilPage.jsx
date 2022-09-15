import { Box, Button, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profileAvatar from "../assets/profileAvatar.png";

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
              color: "naranja.main",
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
              fontSize: { xs: 20, md: 30 },
              marginBottom: 8,
            }}
          >
            Soy una apasionada por el diseño y creación de páginas web, con
            enfoque en el detalle y la calidad de mis páginas, siempre con una
            visión innovadora a nuevas tecnologías. Actualmente me estoy en
            búsqueda de mejorar mis habilidades y aprender nuevas tecnologías y
            técnicas para ampliar mi portafolio de conocimientos en el
            desarrollo frontend.
          </Typography>
        </Grid>
        <Grid
          sx={{
            marginTop:{ xs: 2, sm: 15 },
            textAlign: { xs: "center", sm: "right" },
          }}
          item
          xs={12}
          sm={6}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img id="profileAvatar" src={profileAvatar} />
          </Box>
        </Grid>
      </Grid>
      <Grid
        sx={{
          textAlign: { xs: "center", md: "left" },
          marginBottom: 8,
          marginTop:{ xs: 2, sm: 15 },
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
