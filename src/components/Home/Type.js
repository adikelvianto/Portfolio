import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Reliability Engineer at Citilink Indonesia",
          "Tech Enthusiast",
          "Verified TensorFlow Developer",
          "Aerospace Engineering Graduate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
