import fs from 'node:fs';
import { describe, it, expect, beforeAll } from 'vitest';
import { documentToQuiz, type QuizDocument, checkAnswer } from './quiz';

describe('Quiz', () => {

    describe('Single option', () => {
        let result: QuizDocument;
        beforeAll(async () => {
            result = await documentToQuiz(fs.readFileSync('./fixtures/single-option.md', 'utf-8'));
        });

        it('create the question', async () => {
            expect(result.quizzes[0].title).toEqual('Question 1');
        });

        it('create the options', async () => {
            expect(result.quizzes[0].options).toEqual(['Option 1', 'Option 2', 'Option 3']);
        });

        it('create the answers', async () => {
            expect(result.quizzes[0].answers).toEqual(['Option 2']);
        });

        it('create the body', async () => {
            expect(result.quizzes[0].body).toMatchInlineSnapshot(`
              [
                "<p>A sample question</p>",
              ]
            `);
        });

        it('create the frontmatter', async () => {
            expect(result.topic).toEqual('JavaScript');
        });

        it('create the explanation', async () => {
            expect(result.quizzes[0].comment).toMatchInlineSnapshot(`
              [
                "<p role=\\"comment\\">
              This is the explanation
              </p>
              ",
              ]
            `);
        })

        it('creates the options', () => { 
            expect(result.quizzes[0].options).toEqual(['Option 1', 'Option 2', 'Option 3']);
        })
    });

    describe('Multi option', () => {
        let result: QuizDocument;
        beforeAll(async () => {
            result = await documentToQuiz(fs.readFileSync('./fixtures/multi-option.md', 'utf-8'));
        });

        it('create the answers', async () => {
            expect(result.quizzes[0].answers).toEqual(['Option 2', 'Option 3']);
        });

        it('create the body', async () => {
            expect(result.quizzes[0].body).toMatchInlineSnapshot(`
              [
                "<p>A sample question</p>",
              ]
            `);
        });
    });

    describe('No option', () => {
        it('create the question', async () => {
            return expect(() => documentToQuiz(fs.readFileSync('./fixtures/no-option.md', 'utf-8'))).rejects.toThrowErrorMatchingInlineSnapshot('"Some quizzes has no answers, see the README.md for how to define a quiz document. See Question 1"');
        });
    });

    describe('No question', () => {
        it('create the question', async () => {
            return expect(() => documentToQuiz(fs.readFileSync('./fixtures/no-question.md', 'utf-8'))).rejects.toThrowErrorMatchingInlineSnapshot('"No Quiz found, see the README.md for how to define a quiz document."');
        });
    });

    describe('Check Quiz', () => {
        describe('Single option', () => {
            it('correct single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/single-option.md', 'utf-8'));
                expect(checkAnswer(result.quizzes[0], ['Option 2'])).toEqual(true);
            });
    
            it('incorrect single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/single-option.md', 'utf-8'));
                expect(checkAnswer(result.quizzes[0], ['Option 1'])).toEqual(false);
            });
        })

        describe('Multi option', () => {
            it('correct single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/multi-option.md', 'utf-8'));
                expect(checkAnswer(result.quizzes[0], ['Option 2', 'Option 3'])).toEqual(true);
            });
    
            it('incorrect single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/multi-option.md', 'utf-8'));
                expect(checkAnswer(result.quizzes[0], ['Option 2', 'Option 4'])).toEqual(false);
            });
        })
       
    });

    describe('Multiple Quizzes', () => {
        let result: QuizDocument;
        beforeAll(async () => {
            result = await documentToQuiz(fs.readFileSync('./fixtures/multi-quiz.md', 'utf-8'));
        });

        it('creates multiple quizzes', async () => {
            const titles = result.quizzes.map(quiz => quiz.title);
            expect(titles).toEqual(['Question 1', 'Question 2', 'Question 3']);
        });

        it('creates multiple answers', async () => {
            const answers = result.quizzes.map(quiz => quiz.answers);
            expect(answers).toEqual([['Option 4'], ['Option 2'], ['Option 1', 'Option 2', 'Option 4']]);
        });
    });

});