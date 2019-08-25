# RESTful API 

## Prerequisites

[NodeJS](https://nodejs.org/en/download/)

## Features

- [TypeScript](https://www.typescriptlang.org/) as Language

- Framework: [Express.js](https://expressjs.com/)

- ODM: [Mongoose](https://mongoosejs.com/)

- Authentication & Authorization with [JSON Web Tokens](https://jwt.io/) and [Passport.js](http://www.passportjs.org/)

## Getting Started

### Installation

1. install the dependencies using `npm install` or `npm i`

2. Start the app using `npm start`

### Available routes

| Method   | Resource        | Description                                                                                                                                 |
| :------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`   | `/user`     | Create a new user in the DB. You need to specify in the body the following attributes: name, lastname, email & password.                        |
| `POST`   | `/login` | Sign in with the email & password. If it's successful, then generates a token.                                                            |
| `GET`    | `/user/:id`    | It returns the specified id user. You need to specify the token in the header with the following format: `Authorization: Token your-token` |
| `PUT`    | `/user/:id`    | Updates an already created user in the DB. You need to specify the token in the header with the following format: `Authorization: Token your-token`   |                                                                                                |

### Available scripts

- `start` - Transpile Typescript to ES6 and run the transpiled app.
- `start-pm2` - Transpile Typescript to ES6 and run the transpiled app with PM2 global.
- `build` - Transpile TypeScript to ES6.
- `dev` - Transpile Typescript to ES6 and run the transpiled app with Nodemon.

## License

MIT © Sarah Pfaffenzeller
