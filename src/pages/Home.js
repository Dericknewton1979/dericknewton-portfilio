import React from "react";

function Home() {
  return (
    <div className="main">
      <h1 className="name slide-in-left">Derick Newton</h1>

      <h2
        className="statement slide-in-right-delayed "
        style={{ animationDelay: "1s" }}
      >
        Developing Endless Possibilites!
      </h2>
      <div>
        <h3
          className="my-info slide-in-left-delayed"
          style={{ animationDelay: "1s" }}
        >
          Im a full stack engineer with a passion for perfection. After many
          years in Business Management I am pursuing a career in web
          development. I am currently open to any opportunities and cant wait to
          help you out!
        </h3>
      </div>
    </div>
  );
}

export default Home;
