import fs from 'node:fs';
import { describe, it, expect, beforeAll } from 'vitest';
import {
	extractTopicFromMarkdown,
	loadTopicsMetadata,
	type Topic,
	type TopicMetaData
} from './topic';

describe('Topic', () => {
	let topic: Topic;

	beforeAll(async () => {
		topic = await extractTopicFromMarkdown(
			fs.readFileSync('./fixtures/fixture-topic.md', 'utf-8'),
			'fixtures/fixture-topic.md'
		);
	});

	describe('Basic Metadata', () => {
		it('has a title', () => {
			expect(topic.title).toBe('Fixture Topic');
		});

		it.skip('has a description', () => {
			expect(topic.description).toBe('This is a fixture topic.');
		});

		it('has a list of quizzes', () => {
			expect(topic.quizzes.length).toBe(3);
		});

		it('has a path', () => {
			expect(topic.path).toBe('fixtures/fixture-topic.md');
		});
	});

	describe('Multiple Choice', () => {
		it('creates the question', () => {
			expect(topic.quizzes[0].title).toEqual('Question 1');
		});

		it('creates the options', () => {
			expect(topic.quizzes[0].options).toEqual(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
		});

		it('creates the answers', () => {
			expect(topic.quizzes[0].answers).toEqual(['Option 2', 'Option 3']);
		});

		it('creates the body', () => {
			expect(topic.quizzes[0].body).toMatchInlineSnapshot(`
              [
                "<p>A Multiple Choice Question</p>",
              ]
            `);
		});

		it('creates the explanation', () => {
			expect(topic.quizzes[0].comment).toMatchInlineSnapshot(`
              [
                "<p>This is an explanation for the multiple choice question above.</p>",
                "<p>Even though this is a multiple choice question, it is possible to have a single correct answer.</p>",
              ]
            `);
		});
	});

	describe('Single Choice', () => {
		it('creates the question', () => {
			expect(topic.quizzes[1].title).toEqual('Question 2');
		});

		it('creates the options', () => {
			expect(topic.quizzes[1].options).toEqual(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
		});

		it('creates the answers', () => {
			expect(topic.quizzes[1].answers).toEqual(['Option 2']);
		});

		it('creates the body', () => {
			expect(topic.quizzes[1].body).toMatchInlineSnapshot(`
              [
                "<p>A Single Choice Question</p>",
              ]
            `);
		});

		it('creates the explanation', () => {
			expect(topic.quizzes[1].comment).toMatchInlineSnapshot(`
              [
                "<p>This is an explanation for the single choice question above.</p>",
              ]
            `);
		});
	});

	describe('Code', () => {
		it('creates the question', () => {
			expect(topic.quizzes[2].title).toEqual(
				'Question 3 with <span class="text-primary">code</span> block in the question'
			);
		});

		it('creates the options', () => {
			expect(topic.quizzes[2].options).toEqual(['True', 'False']);
		});

		it('creates the answers', () => {
			expect(topic.quizzes[2].answers).toEqual(['False']);
		});

		it('creates the body', () => {
			expect(topic.quizzes[2].body).toMatchInlineSnapshot(`
              [
                "<p>This is a question with a <span class=\\"text-primary\\">code</span> block in the question.</p>",
                "<pre><code class=\\"inline-code\\" language=\\"js\\">const a = 1;</code></pre>",
              ]
            `);
		});

		it('creates the explanation', () => {
			expect(topic.quizzes[2].comment).toMatchInlineSnapshot(`
				[
				  "<p>This explanation contains some code as well</p>",
				  "<pre><code class=\\"inline-code\\" language=\\"js\\">console.log('Some code is here');</code></pre>",
				]
			`);
		});
	});
});
