import type { Quiz } from "./topic";

export interface Answered {
    quiz: Quiz;
    answers: string[];
    correct: boolean;
    choices: string[];
}

export const validateAnswer = (quiz: Quiz, answers: string[]): boolean => {
    const correctAnswers = quiz.answers.sort();
    const givenAnswers = answers.sort();
    return correctAnswers.every((answer, index) => answer === givenAnswers[index]);
}