import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Web Developer",
          "HTML",
          "CSS",
          "Javascript",
          "React",
          "Redux",
          "POSGRESQL",
          "Node.js",
          "Sequelize",
          "Typescript",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
