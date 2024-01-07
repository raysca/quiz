
<h1 align="center"> Revis3 </h1>
<div align="center"> 
<a href="https://revis3.web.app">Revis3 Website</a>  |
<a href="https://revis3.web.app/react">React Quiz</a>  | 
<a href="https://revis3.web.app/web">Full Stack Quiz</a>
</div>

Revis3 is a markdown powered quiz app that aims to help developers to revise technical concepts and prepare for interviews.

## Project Structure

- `quizzes` - This folder contains all the quizzes. Each folder in the quizzes folder is a module
- `/quizzes/*/README.md` - The `README.md` file contains the module name and description
- `/quizzes/*.md` - Markdown files contains the quiz content. The files are the different topics in the module.

## Structure of a quiz

```markdown
# Topic Title (Not required)

## Question Title

The question body goes here. It can be a paragraph or a code snippet or both.

- [ ] Option 1
- [ ] Option 2
- [x] Option 3 (This is the correct answer)
- [ ] Option 4

---

The explanation for the question goes here below the horizontal line. The explanation is optional.

## Multiple Answer Question

This is an example oof a multiple answer question

- [x] Option 1
- [ ] Option 2
- [x] Option 3
- [ ] Option 4

```

### Example Topics

- [React Hooks](quizzes/react/hooks.md)
- [Node.js](quizzes/javascript/nodejs.md)
- [Web Security](quizzes/web/security.md)
- [HTTP](quizzes/web/http.md)

```markdown

## Submitting a quiz

- Fork this repository
- Create a new folder in the `quizzes` folder if it is a new module or add the quiz to an existing module in the topic.
- Create a pull request

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.