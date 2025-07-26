const express = require("express");
const sqlite = require("sqlite3").verbose();
const path = require("path");

const app = express();

app.use(express.static('./public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const db = new sqlite.Database('messages.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {
        console.log("Connected to the messages database.");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        email TEXT,
        message TEXT
    )
`, (err) => {
    if (err) {
        console.error("Error creating table " + err.message);
    } else {
        console.log("Messages table is ready.");
    }
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index page.html'));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index page.html'));
});

app.get("/submit", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Message Submission Page.html'));
});

app.post("/submit", (req, res) => {
    const { title, email, message } = req.body;

    db.run(
        'INSERT INTO messages (title, email, message) VALUES (?, ?, ?)',
        [title, email, message],
        function(err) {
            if (err) {
                console.error("Error inserting message " + err.message);
                res.status(500).send("Failed to insert message.");
            } else {
                console.log("Message inserted successfully.");
                res.redirect("/view");
            }
        }
    );
});

app.get("/view", (req, res) => {
  db.all('SELECT * FROM messages', [], (err, rows) => {
    if (err) {
      console.error("Error fetching messages " + err.message);
      return res.status(500).send("Internal Server Error");
    }

    res.render("Message Display Page", { messages: rows });
  });
});



app.get("/viewMessages", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'viewMessagesPage.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

