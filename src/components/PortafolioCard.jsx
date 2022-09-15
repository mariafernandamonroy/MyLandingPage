import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const PortafolioCard = ({ proyecto }) => {
  return (
    <Grid container>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", sm: "center" },
        }}
        item
        xs={12}
        sm={12}
      >
        <Paper
          sx={{
            margin: 2,
            padding: 4,
            borderRadius: 5,
            maxnHeight: { xs: 200, sm: 500 },
            maxWidth: { sm: 1000 },
            textAlign: "center",
            backgroundColor: "#EFEFEF",
          }}
          elevation={8}
        >
          <Grid container>
            <Grid
              sx={{
                textAlign: { xs: "center", sm: "center" },
                marginY: 10,
              }}
              item
              xs={12}
              sm={6}
            >
              <img id="proyectoImg" src={proyecto.imagen} />
            </Grid>

            <Grid
              sx={{
                textAlign: "center",
                marginY: 6,
              }}
              item
              xs={12}
              sm={6}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                }}
              >
                {proyecto.nombre}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                }}
              >
                {proyecto.descripcion}
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  marginY: 4,
                  padding: 2,
                  borderRadius: 5,
                  textAlign: "center",
                  // width: { xs: 300, sm: 400 },
                }}
              >
                {proyecto.stack}
              </Paper>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 5,
                    mr: { xs: 3, sm: 5 },
                    backgroundColor: "rosado.main",
                    color: "blanco.main",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: { xs: 13, sm: 15 },
                    ":hover": {
                      backgroundColor: "amarillo.main", // theme.palette.primary.main
                      color: "blanco.main",
                    },
                  }}
                  href="https://github.com/mariafernandamonroy"
                  target="_blank"
                  startIcon={<VisibilityIcon />}
                >
                  Vista Previa
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 5,
                    backgroundColor: "azul.main",
                    color: "blanco.main",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: { xs: 13, sm: 15 },
                    ":hover": {
                      backgroundColor: "azul.main", // theme.palette.primary.main
                      color: "blanco.main",
                    },
                  }}
                  href="https://github.com/mariafernandamonroy"
                  target="_blank"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
