# 📚 Subject Voting App

A simple web-based voting app where users can vote for their favorite subject: **Maths**, **Physics**, or **Chemistry**. Built with Node.js, Express, and SQLite.

## 🚀 Features

- Vote for a subject (Maths, Physics, Chemistry)
- See real-time voting results
- Stylish UI with HTML, CSS, and emojis
- Lightweight and runs in-memory (no database setup required)

## 📁 Project Structure

```
subject-voting-app/
├── public/
│   ├── index.html       # Voting page
│   ├── results.html     # Results page
│   └── style.css        # Styling
├── server.js            # Backend logic
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/subject-voting-app.git
cd subject-voting-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

The app will start on **http://localhost:8080**

> Make sure port 8080 is open and not in use.

## 🖥️ Accessing the App

- Vote Page: [http://localhost:8080](http://localhost:8080)
- Results Page: [http://localhost:8080/results.html](http://localhost:8080/results.html)

## 🧠 Tech Stack

- **Frontend:** HTML, CSS
- **Backend:** Node.js, Express
- **Database:** SQLite (in-memory)

## 📌 Notes

- All votes are stored temporarily in memory. Restarting the server will reset all votes.
- For persistence, you can change the database from `:memory:` to a file-based SQLite DB.

## 📄 License

This project is open source and free to use.

## ✨ Author

Created by [Your Name] – Happy coding! ✨
