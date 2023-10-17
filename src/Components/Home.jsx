import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("CharacterCreator");
  };
  return (
    <div>
      <h1>Welcome to my DnD Character Creator</h1>
      <p>
        Here you can create your own character from the comfort of your
        computer!
      </p>
      <button onClick={handleClick}>Get Started!</button>
    </div>
  );
};

export default Home;
