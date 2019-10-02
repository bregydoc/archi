import React from "react";
import { H, W } from "./consts";

export default props => {
  const [x1, y1] = props.start;
  const [x2, y2] = props.end;

  console.log(props.type);

  return (
    <rect
      x={`${x1 * W}`}
      y={`${y1 * H}`}
      width={`${(x2 - x1) * W}`}
      height={`${(y2 - y1) * H}`}
      fill="#8afafa"
    />
  );
};
