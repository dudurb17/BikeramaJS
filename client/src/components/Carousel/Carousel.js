import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Carouselsel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return <div>Tirando essa merda de carrosel</div>;
};

export default Carouselsel;
