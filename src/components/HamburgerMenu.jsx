import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-scroll";

export const HamburgerMenu = ({ item, handle }) => {

  return (
    <MenuItem>
      <Link
        activeClass="active"
        smooth
        spy
        to={item.to}
        onClick={handle}
      >
        <Typography textAlign="center">{item.item}</Typography>
      </Link>
    </MenuItem>
  );
};
