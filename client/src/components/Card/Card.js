import React from "react";
import Card from "react-bootstrap/Card";

const CardRank = () => {
  return (
    <>
      {/* mostra cll */}
      <Card className="d-block d-lg-none">
        <Card.Img
          variant="top"
          width={171}
          height={200}
          src="https://cdn-icons-png.flaticon.com/512/1041/1041158.png?w=740&t=st=1684615583~exp=1684616183~hmac=9b0bea199a0e338391a56125d3d59815f85f32eb1b080c91f14b3eb3b621c88e"
        />
      </Card>
      {/* mostra pc */}
      <Card className="d-none d-lg-block">
        <Card.Img
          variant="top"
          width={171}
          height={200}
          src="https://www.shutterstock.com/image-vector/ranking-medal-icon-illustration-set-260nw-737272597.jpg"
        />
      </Card>
    </>
  );
};

export default CardRank;
