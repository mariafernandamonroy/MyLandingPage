import Carousel from 'react-material-ui-carousel'
import { proyectos } from "../database/proyectos";
import { PortafolioCard } from "./PortafolioCard";

export const PortafolioCarousel = () => {
  return (
    <Carousel>
      {proyectos.map((proyecto) => (
        <PortafolioCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </Carousel>
  );
};
