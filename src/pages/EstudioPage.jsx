import { Container, Grid, Paper, Typography } from "@mui/material";
import { SkillListFimlm } from "../components/SkillListComponentFimlm";
import { SkillListSofka } from "../components/SkillListComponentSofka";
import { skillsFimlm } from "../database/SkillsDatabaseFimlm";
import { skillsSofka } from "../database/SkillsDatabaseSofka";

export const EstudioPage = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        backgroundColor: "amarillo.main",
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
              minHeight: { sm: 600 },
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
              Training de Desarrollo FullStack
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
              Octubre - Noviembre 2021
            </Typography>
            {skillsSofka.map((skill) => (
              <SkillListSofka
                key={skill.skill}
                icon={skill.image}
                skill={skill.skill}
              />
            ))}
          </Paper>
        </Grid>
        <Grid
          sx={{ textAlign: { xs: "center", sm: "right" } }}
          item
          xs={12}
          sm={6}
        >
          <Paper
            sx={{ margin: 4, padding: 4, borderRadius: 5, minHeight: { sm: 600 }, }}
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
              Diplomado en Desarrollo Frontend con React Js
            </Typography>
            <Typography
              sx={{
                fontFamily: "mada",
                fontWeight: "bolder",
                fontSize: { xs: 20, md: 30 },
                textAlign: "center",
              }}
            >
              Fundación María Luisa Moreno y Universidad Tecnológica
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
              Junio - Septiembre 2022
            </Typography>
            {skillsFimlm.map((skill) => (
              <SkillListFimlm
                key={skill.skill}
                icon={skill.image}
                skill={skill.skill}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
