import { elements } from "./consts";

export const ArchiMockup = {
  items: [
    {
      id: "0",
      type: elements.BLOCK,
      from: [0, 0],
      to: [1, 1],
      layer: 0,
      meta: {
        color: "primary"
      }
    },
    {
      id: "1",
      type: elements.BLOCK,
      from: [2, 2],
      to: [4, 3],
      layer: 0,
      meta: {
        color: "secondary"
      }
    },
    {
      id: "1",
      type: elements.BLOCK,
      from: [4, 4],
      to: [5, 6],
      layer: 0,
      meta: {
        color: "ternary"
      }
    },
    {
      id: "2",
      type: elements.TEXT,
      from: [0, 0],
      to: [1, 1],
      layer: 1,
      meta: {
        text: "HELLO WORLD"
      }
    }
  ]
};
