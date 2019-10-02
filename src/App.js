import React from "react";
import { Box, Card, Image, Heading, Text } from "rebass";
import Board from "./Board";
import TDView from "./TDView";
import ISOView from "./ISOView";

export default () => (
  <Board>
    <TDView />
    <ISOView />
  </Board>
);
