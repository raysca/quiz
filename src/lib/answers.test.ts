import fs from 'node:fs';
import { describe, it, expect, beforeAll } from 'vitest';
import { validateAnswer } from './answers';
import { extractTopicFromMarkdown, type Quiz, type Topic } from './topic';

describe('Answers', () => {
	let topic: Topic;
	beforeAll(async () => {
		topic = await extractTopicFromMarkdown(
			fs.readFileSync('./fixtures/fixture-topic.md', 'utf-8'),
			'fixtures/fixture-topic.md'
		);
	});

	describe('Multi option', () => {
		it('correct multiple answers', async () => {
			expect(validateAnswer(topic.quizzes[0], ['Option 2', 'Option 3'])).toEqual(true);
		});

		it('incorrect multiple answer', async () => {
			expect(validateAnswer(topic.quizzes[0], ['Option 2', 'Option 4'])).toEqual(false);
		});
	});

	describe('Single option', () => {
		it('correct single option answer', async () => {
			expect(validateAnswer(topic.quizzes[1], ['Option 2'])).toEqual(true);
		});

		it('incorrect single option answer', async () => {
			expect(validateAnswer(topic.quizzes[1], ['Option 1'])).toEqual(false);
		});
	});
});
