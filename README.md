# snehil.me

This personal website (2020) is a Create React App project, leveraging Contentful for content management. It employs client-side rendering and allows full authoring via Contentful. The architecture is component-driven, with components visualized in Storybook. Code quality is maintained with ESLint for linting, Prettier for formatting, and Jest for testing.


## Technologies Used

- React.js
- Contentful
- Storybook
- ESLint
- Prettier
- Jest

## Getting Started

Clone the repository to your local machine.

Install the dependencies.

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run test:lint`

Runs ESLint on the `./src` directory, checking `.ts` and `.tsx` files.

### `npm run lint:prettier`

Runs Prettier on the `./src` directory, formatting `.js`, `.ts`, `.tsx`, `.json`, and `.scss` files.

### `npm run deploy`

Deploys the app to GitHub Pages.

### `npm run svgr`

Generates React components from SVG files in the `public/assets/svg-elements` directory.

### `npm run storybook`

Starts Storybook on [http://localhost:9001](http://localhost:9001).

### `npm run contentful:types`

Generates TypeScript definitions for your Contentful models.

## License

[MIT](https://choosealicense.com/licenses/mit/)
