const express = require('express')

const app = express()

const USERS = [
  {
    "id": 1,
    "email": "vansh@gmail.com",
    "first_name": "Vansh",
    "last_name": "Saini",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.get('/', (req, res) => {
  res.send('Node.js + Express.js is fun :)')
})

app.get('/users', (req, res) => {
  res.json(USERS)
})

app.get('/users/even', (req, res) => {
  const usersWithEvenId = USERS.filter(user => user.id % 2 == 0)
  res.json(usersWithEvenId)
})

app.get('/users/odd', (req, res) => {
  const usersWithOddId = USERS.filter(user => user.id % 2!= 0)
  res.json(usersWithOddId)
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/pages/about.html')
})

app.get('/about-old', (req, res) => {
  res.redirect('/about')
})

app.get('/download-node-icon', (req, res) => {
  res.download(__dirname + '/assets/node-icon.png')
})

app.listen(3000, () => {
  console.log('Server is running :)')
})



















/*
  # Express.js - Node.js Framework
  
  # Node.js boilerplate code for building a sever
  const { createServer } = require('node:http');

  const server = createServer((req, res) => {
    res.end('Our first node server');
  });

  server.listen(3000, () => {
    console.log('Server is up:)');
  });

  // Commands
  - npm init -y (Initialize the node folder)
  - npm i express
  - node index (Run the server)

  // package.json - Metadata of your projects

  # Response methods
  - res.send()
  - res.json()
  - res.sendFile()
  - res.download()
  - res.redirect()

  # HTTP methods: (Future - REST APIs)
  - GET (.get()) - Read
  - POST (.post()) - Create
  - PATCH (.patch()) - Update
  - DELTE (.delete()) - Delete
*/