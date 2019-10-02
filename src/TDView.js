import React, { useState, useRef } from "react";
import { Box, Flex, Card, Image, Heading, Text } from "rebass";
import Block from "./Block";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { W, H, N, M } from "./consts";
import BlockView from "./BlockView";

export default props => {
  const [selectedItem, setSelectedItem] = useState(null);

  let configDraggable = event => {
    console.log(event);
    let svg = event.target;
    svg.addEventListener("mousedown", e => {
      console.log("D");
      setSelectedItem(e);
    });
    svg.addEventListener("mousemove", e => {
      event.preventDefault();
      let x = parseFloat(selectedItem.getAttributeNS(null, "x"));
      selectedItem.setAttributeNS(null, "x", x + 0.1);
    });
    svg.addEventListener("mouseup", e => {});
    svg.addEventListener("mouseleave", e => {});
  };

  const onDrag = e => {
    setSelectedItem(e.target);
  };

  const onDragging = e => {
    e.preventDefault();

    if (selectedItem) {
      let x = parseFloat(selectedItem.getAttributeNS(null, "x"));
      selectedItem.setAttributeNS(null, "x", x + 0.1);
    }
  };

  const onEndDrag = e => {};

  return (
    <Box width="100%">
      <Box mb={3}>
        <Text textAlign="center" fontSize={4} color="#23374d">
          2D View
        </Text>
        <Text textAlign="center" color="#1089ff" fontSize={1}>
          In this view you can design and struct your board
        </Text>
      </Box>
      <Box height="68vh" backgroundColor="#eeeeee" overflow="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${N * W} ${M * H}`}
          onMouseDown={onDrag}
          onMouseMove={onDragging}
          onMouseUp={onEndDrag}
          onMouseLeave={onEndDrag}
        >
          <BlockView start={[0, 0]} end={[1, 1]} type="BLOCK"></BlockView>
          <BlockView start={[2, 2]} end={[3, 4]} type="BLOCK"></BlockView>
        </svg>
      </Box>
      <Box>
        <Text fontSize={1} my={3}>
          Toolkit
        </Text>
        {/* <Flex>
          <Block w={W} h={H}></Block>
        </Flex> */}
      </Box>
    </Box>
  );
};
