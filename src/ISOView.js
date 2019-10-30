import React from "react";
import { Box, Card, Image, Heading, Text } from "rebass";

import * as THREE from "three";

import { Canvas, Camera } from "react-three-fiber";

import { ArchiMockup } from "./mockups";
import { N, M } from "./consts";

const Plane = ({ position }) => {
  return (
    <mesh receiveShadow position={new THREE.Vector3(12, -1, -4)}>
      <boxGeometry attach="geometry" args={[N, 0.2, M]} />
      <meshPhongMaterial attach="material" color="#272727" />
    </mesh>
  );
};

const BlockBox = props => {
  const size = props.size || [5, 5, 5];
  const pos = props.pos || [0, 0, 0];

  size[1] = 0.5;

  return (
    <mesh
      onClick={e => console.log("click")}
      onPointerOver={e => console.log("hover")}
      onPointerOut={e => console.log("unhover")}
      position={new THREE.Vector3(pos[0], pos[1], pos[2])}
      receiveShadow
      // rotation={new THREE.Euler(1, 1, 0)}
    >
      <boxGeometry attach="geometry" args={size} />
      <meshLambertMaterial
        attach="material"
        color="peachpuff"
        opacity={0.8}
        transparent
      />
    </mesh>
  );
};

export default () => {
  return (
    <Box width="100%">
      <Box>
        <Text textAlign="center" fontSize={4} color="#23374d">
          Isometric View
        </Text>
        <Text textAlign="center" color="#1089ff" fontSize={1}>
          Use this view to see your Isometric 3D render
        </Text>
      </Box>
      <Box width="100%" height="78vh">
        <Canvas
          // orthographic
          camera={{
            position: new THREE.Vector3(20, 5, 20),
            lookAt: new THREE.Vector3(0, 0, 0)
          }}
          onCreated={({ gl }) => (
            (gl.shadowMap.enabled = true),
            (gl.shadowMap.type = THREE.PCFSoftShadowMap)
          )}
        >
          >
          <group ref={ref => console.log("we have access to the instance")}>
            <ambientLight intensity={0.8} color={"red"} />
            <spotLight
              intensity={0.6}
              position={[30, 30, 50]}
              angle={0.2}
              penumbra={1}
              castShadow
            />
            {/* <directionalLight intensity={1.0} color={"white"} /> */}
            <Plane></Plane>
            <BlockBox></BlockBox>
          </group>
        </Canvas>
      </Box>
    </Box>
  );
};
