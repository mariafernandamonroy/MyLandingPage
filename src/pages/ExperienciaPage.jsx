import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import react from "../assets/react.svg";

export const ExperienciaPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "rosado.main",
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
          color: "azul.main",
          fontSize: { xs: 40, md: 60 },
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Estudios
      </Typography>

      <Grid container>
        <Grid
          sx={{ textAlign: { xs: "center", sm: "left" } }}
          item
          xs={12}
          sm={6}
        >
          <Paper
            sx={{
              margin: 4,
              padding: 4,
              borderRadius: 5,
              minHeight: { sm: 550 },
            }}
            elevation={8}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "mada",
                fontWeight: "bold",
                fontSize: { xs: 25, md: 40 },
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              Consultora de Desarrollo
            </Typography>
            <Typography
              sx={{
                fontFamily: "mada",
                fontWeight: "bolder",
                fontSize: { xs: 20, md: 30 },
                textAlign: "center",
              }}
            >
              Sofka
            </Typography>
            <Typography
              sx={{
                fontFamily: "mada",
                fontWeight: "medium",
                fontSize: { xs: 18, md: 25 },
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              Diciembre 2021 - Actualidad
            </Typography>
            <Typography
              sx={{
                fontFamily: "mada",
                fontWeight: "bold",
                fontSize: { xs: 18, md: 25 },
                textAlign: "left",
              }}
            >
              Proyecto:{" "}
              <span id="spanExperience">
                Administración de pólizas de seguros de Oracle (OIPA)
              </span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "mada",
                fontWeight: "bold",
                fontSize: { xs: 18, md: 25 },
                textAlign: "left",
              }}
            >
              Cliente: <span id="spanExperience">Sura</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "mada",
                fontWeight: "bold",
                fontSize: { xs: 18, md: 25 },
                textAlign: "left",
              }}
            >
              Tecnologías utilizadas:{" "}
              <span id="spanExperience">
                <ul>
                  <li>OIPA</li>
                  <li>XML</li>
                  <li>Base de datos SQL Oracle</li>
                </ul>
              </span>
            </Typography>
          </Paper>
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
    </Container>
  );
};
