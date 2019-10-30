import React, { useRef, useEffect } from "react";
import obelisk from "obelisk.js";
import { ArchiMockup } from "./mockups";

import { elements, colors } from "./consts";

import { IsometricProjection } from "react-isometric-projection";

import treeMesh from "./treeMesh";

export default props => {
  return (
    <svg width="600" height="600" viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" fill="black" />
      <IsometricProjection x={50} y={50} size={50} mesh={treeMesh} />
    </svg>
  );
};

// export default () => {
// const ref = useRef(null);

// useEffect(() => {
//   const canvas = document.getElementById("scene");

//   let point = new obelisk.Point(200, 200);
//   let pixelView = new obelisk.PixelView(canvas, point);
//   const brick = new obelisk.Brick(
//     new obelisk.BrickDimension(480, 480),
//     new obelisk.SideColor().getByInnerColor(0xf9c6ba)
//   );
//   pixelView.renderObject(brick);
//   ArchiMockup.items.map(item => {
//     console.log(item);
//     if (item.type === elements.BLOCK) {
//       const [x1, y1] = item.from;
//       const [x2, y2] = item.to;
//       point.x += x1 * 20;
//       point.y += y1 * 20;
//       const w = x2 * 20;
//       const d = y2 * 20;

//       pixelView = new obelisk.PixelView(canvas, point);
//       let dimension = new obelisk.CubeDimension(w, d, 40);

//       let color = obelisk.ColorPattern.BLUE;
//       console.log(item.meta.color);
//       if (item.meta.color) {
//         if (item.meta.color === "primary") {
//           color = colors.primary;
//         } else if (item.meta.color === "secondary") {
//           color = colors.secondary;
//         } else if (item.meta.color === "ternary") {
//           color = colors.ternary;
//         } else {
//           color = 0x1a2849;
//         }
//       }

//       let render = new obelisk.Cube(
//         dimension,
//         new obelisk.CubeColor().getByHorizontalColor(color),
//         true
//       );
//       pixelView.renderObject(render);
//     }
//   });
// });

//   return (
//     <div
//       style={{
//         border: "solid red 1px",
//         justifyContent: "center",
//         display: "flex"
//       }}
//     >
//       <canvas
//         style={{
//           border: "solid blue 1px"
//         }}
//         id="scene"
//         width="600"
//         height="600"
//         ref={ref}
//       ></canvas>
//     </div>
//   );
// };
