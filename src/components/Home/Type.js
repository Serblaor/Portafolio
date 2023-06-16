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
          "Typescript",
          "CSS",
          "SASS",
          "BOOTSTRAP",
          "Python",
          "Node.js",
          "Java",
          "POSGRESQL",
          "Sequelize",
          "MySQL",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
