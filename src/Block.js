import React from "react";
import { useDrag } from "react-dnd";
import { Box, Card, Image, Heading, Text } from "rebass";

export default props => {
  const [collectedProps, drag] = useDrag({
    item: { type: "BLOCK" },
    previewOptions: {
      captureDraggingState: true
    }
  });

  let w = "60px";
  let h = "60px";

  if (props.w) {
    w = `${props.w}px`;
  }

  if (props.h) {
    h = `${props.h}px`;
  }

  return (
    <Box
      width={w}
      height={h}
      ref={drag}
      backgroundColor="#23374d"
      sx={{
        cursor: "move",
        borderRadius: "4px",
        border: "#23374d solid 3px"
      }}
    ></Box>
  );
};
