const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Initialize DB
db.serialize(() => {
  db.run("CREATE TABLE votes (subject TEXT)");
});

// Vote POST endpoint
app.post('/vote', (req, res) => {
  const subject = req.body.subject;
  db.run("INSERT INTO votes(subject) VALUES (?)", [subject], (err) => {
    if (err) return res.sendStatus(500);
    res.redirect('/results.html');
  });
});

// Results endpoint
app.get('/results', (req, res) => {
  db.all("SELECT subject, COUNT(*) as count FROM votes GROUP BY subject", (err, rows) => {
    if (err) return res.sendStatus(500);
    const results = {};
    rows.forEach(row => {
      results[row.subject] = row.count;
    });
    res.json(results);
  });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
