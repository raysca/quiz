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
            expect(result.quiz.question).toEqual('Question 1');
        });

        it('create the options', async () => {
            expect(result.quiz.options).toEqual(['Option 1', 'Option 2', 'Option 3']);
        });

        it('create the answers', async () => {
            expect(result.quiz.answers).toEqual(['Option 2']);
        });

        it('create the body', async () => {
            expect(result.body.content).toMatchInlineSnapshot(`
              "<h1 class=\\"text-1xl font-bold\\">JavaScript</h1><h2 class=\\"text-2xl font-bold\\">Question 1</h2><p>A sample question</p>
              <ul>

                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"wrongAnswer\\" type=\\"radio\\" value=\\"Option 1\\" class=\\"radio radio-primary\\" />
                              <span class=\\"label-text text-left\\">Option 1</span>
                          </label>
                      </li>
                  
                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"answer\\" type=\\"radio\\" value=\\"Option 2\\" class=\\"radio radio-primary\\" />
                              <span class=\\"label-text text-left\\">Option 2</span>
                          </label>
                      </li>
                  
                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"wrongAnswer\\" type=\\"radio\\" value=\\"Option 3\\" class=\\"radio radio-primary\\" />
                              <span class=\\"label-text text-left\\">Option 3</span>
                          </label>
                      </li>
                  </ul>
              "
            `);
        });

        it('create the frontmatter', async () => {
            expect(result.body.metadata).toEqual({ topic: 'JavaScript', difficulty: 'easy' });
        });
    });

    describe('Multi option', () => {
        let result: QuizDocument;
        beforeAll(async () => {
            result = await documentToQuiz(fs.readFileSync('./fixtures/multi-option.md', 'utf-8'));
        });

        it('create the answers', async () => {
            expect(result.quiz.answers).toEqual(['Option 2', 'Option 3']);
        });

        it('create the body', async () => {
            expect(result.body.content).toMatchInlineSnapshot(`
              "<h1 class=\\"text-1xl font-bold\\">JavaScript</h1><h2 class=\\"text-2xl font-bold\\">Question 1</h2><p>A sample question</p>
              <ul>

                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"wrongAnswer\\" type=\\"checkbox\\" value=\\"Option 1\\" class=\\"checkbox checkbox-primary\\" />
                              <span class=\\"label-text text-left\\">Option 1</span>
                          </label>
                      </li>
                  
                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"answer\\" type=\\"checkbox\\" value=\\"Option 2\\" class=\\"checkbox checkbox-primary\\" />
                              <span class=\\"label-text text-left\\">Option 2</span>
                          </label>
                      </li>
                  
                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"answer\\" type=\\"checkbox\\" value=\\"Option 3\\" class=\\"checkbox checkbox-primary\\" />
                              <span class=\\"label-text text-left\\">Option 3</span>
                          </label>
                      </li>
                  
                      <li>
                          <label class=\\"label cursor-pointer justify-start space-x-4\\">
                              <input name=\\"wrongAnswer\\" type=\\"checkbox\\" value=\\"Option 4\\" class=\\"checkbox checkbox-primary\\" />
                              <span class=\\"label-text text-left\\">Option 4</span>
                          </label>
                      </li>
                  </ul>
              "
            `);
        });

    });

    describe('No option', () => {
        it('create the question', async () => {
            return expect(() => documentToQuiz(fs.readFileSync('./fixtures/no-option.md', 'utf-8'))).rejects.toThrowErrorMatchingInlineSnapshot('"Quiz has no answers, see the README.md for how to define a quiz document."');
        });
    });

    describe('No question', () => {
        it('create the question', async () => {
            return expect(() => documentToQuiz(fs.readFileSync('./fixtures/no-question.md', 'utf-8'))).rejects.toThrowErrorMatchingInlineSnapshot('"No quiz question found, see the README.md for how to define a quiz document."');
        });
    });

    describe('Check Quiz', () => {

        describe('Single option', () => {
            it('correct single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/single-option.md', 'utf-8'));
                expect(checkAnswer(result.quiz, ['Option 2'])).toEqual(true);
            });
    
            it('incorrect single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/single-option.md', 'utf-8'));
                expect(checkAnswer(result.quiz, ['Option 1'])).toEqual(false);
            });
        })

        describe('Multi option', () => {
            it('correct single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/multi-option.md', 'utf-8'));
                expect(checkAnswer(result.quiz, ['Option 2', 'Option 3'])).toEqual(true);
            });
    
            it('incorrect single option answer', async () => {
                const result = await documentToQuiz(fs.readFileSync('./fixtures/multi-option.md', 'utf-8'));
                expect(checkAnswer(result.quiz, ['Option 2', 'Option 4'])).toEqual(false);
            });
        })
       
    });

});