import React from "react";
import { CardProps } from "../../utils/PropsUtils";

const Card = (props: CardProps) => {
  const { children } = props;
  return <div className="card-container">{children}</div>;
};

export default Card;
