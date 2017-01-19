const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configuration
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));

// Root route
// HTTP request being handled:
//
// GET / HTTP/1.1
// Host: localhost
// User-Agent: whatever (Chrome or something)
//
app.get('/', (req, res) => {
  res.send('hellp');
});

// SCRUD over Express

// Kittens database
let kittensDB = [{
  id: 1,
  name: 'Mittens',
  color: 'black'
}, {
  id: 2,
  name: 'Patches',
  color: 'orange'
}, {
  id: 3,
  name: 'Ben',
  color: 'grey'
}];

let nextKittenId = 4;
function getKittenId() {
  const id = nextKittenId;
  nextKittenId += 1;
  return id;
}

// Search
// GET /kittens
app.get('/kittens', (req, res) => {
  res.render('kittens/index', {
    kittens: kittensDB
  });
});

// Not SCRUD
// The form for creating a new kitten
// GET /kittens/new
app.get('/kittens/new', (req, res) => {
  res.render('kittens/new');
});

// Create
// POST /kittens
app.post('/kittens', (req, res) => {
  const kitten = req.body;
  kitten.id = getKittenId();
  kittensDB.push(kitten);
  res.redirect(`/kittens/${kitten.id}`);
});

// Read
// GET /kittens/:id
app.get('/kittens/:id', (req, res) => {
  const kitten = kittensDB.find((k) => {
    return k.id === Number(req.params.id);
  });
  res.render('kittens/show', {
    kitten: kitten
  });
});

// Update
// PUT /kittens/:id
// app.put('/kittens/:id', (req, res) => {
// POST /kittens/:id/update
app.post('/kittens/:id/update', (req, res) => {
  // TODO implement update
});

// Delete
// DELETE /kittens/:id
// app.delete('/kittens/:id', (req, res) => {
// POST /kittens/:id/delete
app.post('/kittens/:id/delete', (req, res) => {
  kittensDB = kittensDB.filter((kitten) => {
    return kitten.id !== Number(req.params.id);
  });
  res.redirect('/kittens');
});

app.listen(8080);
