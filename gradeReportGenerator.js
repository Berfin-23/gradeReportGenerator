"use strict";

const getLetterGrade = (score) => {
  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  if (score >= 70) {
    return "C";
  }

  if (score >= 60) {
    return "D";
  }

  return "F";
};

const hasPassed = (score) => {
  return score >= 60;
};

const getFeedback = (grade) => {
  if (grade === "A") {
    return "Excellent work";
  }

  if (grade === "B") {
    return "Great job";
  }

  if (grade === "C") {
    return "You passed";
  }

  if (grade === "D") {
    return "Keep learning";
  }

  return "Ask your parents to meet me tomorrow";
};

const createGradeReport = (name, score) => {
  const grade = getLetterGrade(score);

  return {
    name,
    score,
    grade,
    passed: hasPassed(score),
    feedback: getFeedback(grade),
  };
};

console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
