import Carousel from "react-material-ui-carousel";
import { proyectos } from "../database/proyectos";
import { PortafolioCard } from "./PortafolioCard";

export const PortafolioCarousel = () => {
  return (
    <Carousel
      animation="fade"
      duration={700}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          color: "white",
          backgroundColor: "#003547",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          padding: "2px",
          color: "#003547",
        },
      }}
    >
      {proyectos.map((proyecto) => (
        <PortafolioCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </Carousel>
  );
};
