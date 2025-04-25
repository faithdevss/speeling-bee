import React, { useState, useMemo } from "react";

import { getGameWords } from "./_data";

import { Button, Input, Form, TextButton } from "../../components/_style";

import {
  Progress,
  ProgressBar,
  Message,
  ScoreItem,
  ScoreBoard,
  Card,
  Title,
  Container,
  AnswerBoard,
} from "./_style";

import Header from "./header";

function SpeelingBee({ toggleView }) {
  const [difficulty, setDifficulty] = useState("easy");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [points, setPoint] = useState(0);
  const [seeAnswer, setSeeAnswer] = useState(false);

  const gameWords = useMemo(() => getGameWords(difficulty), [difficulty]);
  const currentWord = gameWords[currentIndex];

  // const encouragingMessages = {
  //   correct: [
  //     "Fantastic! 🌟",
  //     "You're on fire! 🔥",
  //     "Keep it up! 💪",
  //     "Amazing job! 🎉",
  //     "You're a spelling wizard! 🧙‍♂️",
  //   ],
  //   incorrect: [
  //     "Don't worry, try again! 💪",
  //     "You've got this! 🌟",
  //     "Practice makes perfect! 📚",
  //     "Keep going! 🎯",
  //     "Almost there! 🎈",
  //   ],
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputWord = event.target.english.value.toLowerCase();
    if (inputWord === currentWord?.english) {
      setCorrect((prev) => prev + 1);
      setPoint((prev) => prev + streak || 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    event.target.english.value = "";
    setCurrentIndex((prev) => prev + 1);
    setSeeAnswer(false);
  };

  const handleSeeAnswer = () => {
    setSeeAnswer(true);
  };

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setSeeAnswer(false);
    setCurrentIndex(0);
    setCorrect(0);
    setStreak(0);
  };

  const progress = (currentIndex / gameWords.length) * 100;
  const isGameComplete = currentIndex >= gameWords.length;

  return (
    <Container>
      <Title>🐝 Spelling Bee Adventure 🐝</Title>
      <Header difficulty={difficulty} setDifficulty={changeDifficulty} />
      <ScoreBoard>
        <ScoreItem type="correct">Correct: {correct}</ScoreItem>
        <ScoreItem type="streak" animate={streak > 2}>
          Streak: {streak} 🔥
        </ScoreItem>
        <ScoreItem type="points">Points: {points} ⭐</ScoreItem>
      </ScoreBoard>

      {!isGameComplete ? (
        <>
          <ProgressBar>
            <Progress progress={progress} />
          </ProgressBar>
          <Card>
            <h2>Spelling: {currentWord?.banglish}</h2>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="english"
                placeholder="Type the word here"
                autoFocus
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <AnswerBoard>
              <TextButton onClick={handleSeeAnswer}>See Answer</TextButton>
              <p>The word is: {(seeAnswer && currentWord?.english) || "___"}</p>
            </AnswerBoard>
          </Card>
        </>
      ) : (
        <Card>
          <h2>🎉 Game Complete! 🎉</h2>
          <p>Final Score: {points} points</p>
          <p>Correct Words: {correct}</p>
          <p>Perfect score! You're amazing! 🌟</p>
          <Button onClick={() => changeDifficulty(difficulty)}>
            Next Lavel
          </Button>
        </Card>
      )}
      <TextButton onClick={toggleView}>Advance Target 🎯</TextButton>
    </Container>
  );
}

export default SpeelingBee;
