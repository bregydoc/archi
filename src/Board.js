import React from "react";
import { Box, Flex } from "rebass";

export default props => {
  if (!props.children) {
    return <div>Please add tour two archi side views</div>;
  }

  if (props.children.length !== 2) {
    return <div>Please add tour two archi side views</div>;
  }

  return (
    <Flex width="100%" height="100%">
      <Box
        p={3}
        width={1 / 2}
        sx={{
          borderRightStyle: "solid",
          borderRightWidth: 0.1,
          borderRightColor: "#e5e5e5"
        }}
      >
        {props.children[0]}
      </Box>
      <Box
        p={3}
        width={1 / 2}
        sx={{
          borderLeftStyle: "solid",
          borderLeftWidth: 0.1,
          borderLeftColor: "#e5e5e5"
        }}
      >
        {props.children[1]}
      </Box>
    </Flex>
  );
};
