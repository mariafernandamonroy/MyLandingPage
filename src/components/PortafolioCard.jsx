import { Paper, Typography } from "@mui/material";

export const PortafolioCard = ({ proyecto }) => {
  return (
    <Paper
      sx={{
        margin: 4,
        padding: 4,
        borderRadius: 5,
        minHeight: { sm: 600 },
      }}
      elevation={8}
    >
      <Typography variant="h2">{proyecto.nombre}</Typography>
    </Paper>
  );
};
