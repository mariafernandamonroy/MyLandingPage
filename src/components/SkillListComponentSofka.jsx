import React from "react";
import { ListItem, Typography } from "@mui/material";

export const SkillListSofka = ({ icon, skill }) => {
  return (
    <>
      <ListItem disablePadding>
        <img id="skillImage" src={icon} />
        <Typography
          sx={{
            fontFamily: "mada",
            fontWeight: "medium",
            fontSize: { xs: 18, md: 25 },
            marginBottom: 2,
            marginLeft: { sx: 1, sm: 5 },
          }}
        >
          {" "}
          {skill}
        </Typography>
      </ListItem>
    </>
  );
};
