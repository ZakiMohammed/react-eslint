# React ESLint

React project for setting up ESLint.

## Run App

Below command will run the project:

```
npm run server
npm run dev
```

For running the server, install `json-server` globally:

```
npm install -g json-server
```

## Initial Setup

Below command executed to perform initial setup:

```
npm create vite@latest

# project name: react-eslint
# framework: react
# variant: JavaScript + SWC

cd react-eslint
npm i

```

## ESLint

Run command:

```
npm run lint
```

Add new script:

```
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"lint:html": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0 --format html > lint.html",
```

Add ESLint ignore file `.eslintignore`:

```
node_modules/
dist/
.prettierrc.cjs
.eslintrc.cjs
```

Refer: https://eslint.org/