import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Front-End & Back-End",
          "Javascript",
          "React",
          "HTML",
          "CSS",
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
