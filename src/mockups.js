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
        color: "red"
      }
    },
    {
      id: "1",
      type: elements.BLOCK,
      from: [2, 2],
      to: [4, 3],
      layer: 0,
      meta: {
        color: "blue"
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
