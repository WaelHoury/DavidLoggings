# DavidLoggings

Welcome to **DavidLoggings** - the fanciest logger middleware for your Node.js server! It logs everything, even your deepest secrets (just kidding, or am I?).

![DavidLoggings](https://media.giphy.com/media/3og0IKMmj5VxZ5scKQ/giphy.gif)

## What is this?

**DavidLoggings** is a lightweight, dependency-free middleware that logs every request, error, and access detail in your Node.js applications. Perfect for those who like to keep an eye on everything... and we mean everything.

## Features

- Logs incoming requests, including method, URL, and body (because why not?)
- Logs request duration and status code (fancy, huh?)
- Logs errors (oopsie daisy!)
- Works out of the box with zero dependencies (we're too cool for that)

## Installation

Because good things come in small packages:

```sh
npm install DavidLoggings
```

## Usage

```
const express = require('express');
const requestLogger = require('davidloggings');
const app = express();

app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/error', (req, res) => {
    res.status(500).send('Oops! Something went wrong.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```
