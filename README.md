# Starter Kit For React with Typescript

## Description

This project will gives you idea about how to use React with typescript. Project configuration is in progress and we are in learning phase of this project.

## Installation & Quickstart

1. Clone the project
2. `npm install`
3. `npm start` or `npm run start` to run the development server
4. `npm run build` to make production build
5. `npm run test:prod` to test production build

## Dependencies (required in production for hosting the project)

1. React
2. React Dom

## Dev-Dependencies (required for only development purpose)

1. @types/react
2. @types/react-dom
3. @types/node
4. awesome-typescript-loader
5. clean-webpack-plugin
6. lite-server
7. source-map-loader
8. typescript
9. uglifyjs-webpack-plugin
10. webpack
11. webpack-cli
12. webpack-dev-server
13. webpack-merge

## Dev-Dependencies uses

```javascript
    "@types/node": "^9.6.6",
    "@types/react": "^16.3.12",
    "@types/react-dom": "^16.0.5"
```
React and React-dom is a javascript packages. If we need to use javascript packages in typescript. We need one bridge between typescript and javascript. We need this translation. Thankfully for react and react-dom we get those translation using thrid party modules @types.
