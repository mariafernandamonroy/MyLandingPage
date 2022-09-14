import { Button, Container, Grid, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";

export const ContactoPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "naranja.main",
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
        Contacto
      </Typography>
      <Grid container>
        <Grid
          sx={{ textAlign: { xs: "center", sm: "center" } }}
          item
          xs={12}
          sm={12}
        >
          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "blanco.main",
              color: "azul.main",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "azul.main", // theme.palette.primary.main
                color: "blanco.main",
              },
            }}
            size="large"
            variant="contained"
            startIcon={<GitHub />}
            href="https://github.com/mariafernandamonroy"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            sx={{
              m: 2,
              borderRadius: 10,
              backgroundColor: "blanco.main",
              color: "azul.main",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "verde.main", // theme.palette.primary.main
                color: "blanco.main",
              },
            }}
            size="large"
            variant="contained"
            startIcon={<WhatsApp />}
            href="https://wa.me/573168927606?text=Hola, me gustaría contactarme contigo"
            target="_blank"
          >
            WhatsApp
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
