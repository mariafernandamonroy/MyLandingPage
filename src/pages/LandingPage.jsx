import { Box } from "@mui/material";
import {
  InicioPage,
  PerfilPage,
  EstudioPage,
  ExperienciaPage,
  ProyectosPage,
  ContactoPage,
} from "./index";
import {} from "./PerfilPage";

export const LandingPage = () => {
  return (
    <Box>
      <Box id="inicio">
        <InicioPage />
      </Box>
      <Box id="perfil">
        <PerfilPage />
      </Box>
      <Box id="estudios">
        <EstudioPage />
      </Box>
      <Box id="experiencia">
        <ExperienciaPage />
      </Box>
      <Box id="portafolio">
        <ProyectosPage />
      </Box>
      <Box id="contacto">
        <ContactoPage />
      </Box>
    </Box>
  );
};
