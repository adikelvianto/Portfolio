import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Reliability Engineer at Citilink Indonesia",
          "Verified TensorFlow Developer",
          "Tech Enthusiast",
          "Aerospace Engineering Graduate",
        ],
        autoStart: true,
        loop: true,
        pauseFor: 500,
        delay: 50,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
