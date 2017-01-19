const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080; // default port 8080

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

function generateRandomString(numberOfUrlChara) {
  return (Math.random() + 1).toString(36)
    .substring(2, numberOfUrlChara + 2);
}

app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_index", templateVars);
});
// %% create url and direct it
app.get('/urls/create', (req, res) => {
  res.render('urls_create');
});

app.post('/urls/create', (req, res) => {
  let shortURL = generateRandomString(6)
  urlDatabase[shortURL] = req.body['longURL'];
  res.redirect('/u/' + shortURL);
});

app.get('/u/:shortURL', (req, res) => {
  res.redirect(urlDatabase[req.params.shortURL]);
});
// %% create url and direct it

app.post('/urls/:shortURL/delete', (req, res) => {
  delete urlDatabase[req.params.shortURL];
  res.redirect('/urls');
});

app.get('/urls/urls_show', (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("urls_show", templateVars);
});

app.post('/urls/:shortURL/update', (req, res) => {
  urlDatabase[req.params.shortURL] = req.body['longURL'];
  res.redirect('/urls');
});


















app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});








