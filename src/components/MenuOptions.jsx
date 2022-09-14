import { Button } from "@mui/material";
import { Link } from "react-scroll";

export const MenuOptions = ({ item }) => {
  return (
    <Link activeClass="active" smooth spy to={item.to}>
      <Button
        sx={{
          ml: 3,
          color: "blanco.main",
          fontFamily: "Mada",
          fontWeight: "bold",
          fontSize: 15,
          mt: 1,
        }}
      >
        {item.item}
      </Button>
    </Link>
  );
};
