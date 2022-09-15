import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import contactAvatar from "../assets/contactAvatar.png";

export const ContactoPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "naranja.main",
        paddingY: 12,
        paddingX: { xs: 5, md: 50 },
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
          sx={{
            textAlign: { xs: "center", sm: "center" },
            display: "flex",
            flexDirection: "column",
            
          }}
          item
          xs={12}
          sm={6}
        >
          <Box>
            <Button
              sx={{
                m: 2,
                paddingX:5,
                borderRadius: 10,
                backgroundColor: "blanco.main",
                color: "azul.main",
                fontWeight: "bold",
                ":hover": {
                  backgroundColor: "azul.main",
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
          </Box>
          <Box>
            <Button
              sx={{
                m: 2,
                borderRadius: 10,
                backgroundColor: "blanco.main",
                color: "azul.main",
                fontWeight: "bold",
                ":hover": {
                  backgroundColor: "verde.main",
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
          </Box>
        </Grid>
        <Grid
          sx={{ textAlign: { xs: "center", ms: "right" } }}
          item
          xs={12}
          sm={6}
        >
          <Box>
            <img id="contactAvatar" src={contactAvatar} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
