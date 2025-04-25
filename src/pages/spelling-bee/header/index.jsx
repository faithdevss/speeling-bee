import React from "react";

import { Button, Container } from "./_style";

function Header({ difficulty, setDifficulty }) {
  return (
    <Container>
      <Button
        selected={difficulty === "easy"}
        onClick={() => setDifficulty("easy")}
      >
        Easy 😊
      </Button>
      <Button
        selected={difficulty === "medium"}
        onClick={() => setDifficulty("medium")}
      >
        Medium 🤔
      </Button>
      <Button
        selected={difficulty === "hard"}
        onClick={() => setDifficulty("hard")}
      >
        Hard 😎
      </Button>
    </Container>
  );
}

export default Header;
