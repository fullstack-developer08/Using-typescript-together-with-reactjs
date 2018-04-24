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

```javascript
    "webpack": "^4.6.0",
    "webpack-cli": "^2.0.15",
    "webpack-dev-server": "^3.1.3",
    "webpack-merge": "^4.1.2",
    "uglifyjs-webpack-plugin": "^1.2.5",
    "clean-webpack-plugin": "^0.1.19"
```
The above all dependency is related to the webpack and webpack-dev-server. 

webpack-dev-server is build on the webpack module. It provides a development server and passed file using in memory of the server, It will not create the dist or build folder. 

we use webpack to build the production copy of our project. 

clean-webpack-plugin is used to clean the dist folder before generating new dist folder. 

uglifyjs-webpack-plugin is used to minify the javascript file.

webpack-merge we use share common properties of webpack config between development and production.

webpack-cli is required to run webpack module.

```javascript
"lite-server": "^2.3.0"
```
lite-server is just like express server and webpack-dev-server. It can also listen the changes and reflected the changes in the port.

```javascript
"awesome-typescript-loader": "^5.0.0",
"source-map-loader": "^0.2.3",
"typescript": "^2.8.3",
```

