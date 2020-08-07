# v1-golf

node js + react (w/react-query) live PGA tour golf scoreboard

## Getting Started

## keep a list of dependencies

- generate a package.json file: `npm init -y`

## ignore node_modules folder content

- we don't want to push it up to GitHub
- make a `.gitignore`: `npx gitignore node`

## server

- create an `index.js` file at the project's root.
- install express: `npm i express nodemon helmet morgan nanoid`.
- server script inside package.json: `"server": "nodemon index.js"`
- to run the server use: `npm run server`.

## deploy

- dynamic PORT in index.js
- start script in package.json: `"start": "node index.js"`
