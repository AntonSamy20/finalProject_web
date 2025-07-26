## 1. **Install Node.js**
- Download and install Node.js from [nodejs.org](https://nodejs.org/).
- After installation, open **Command Prompt** and check:
  ```
  node -v
  npm -v
  ```

---

## 2. **Download or Clone the Project**
- Place your project folder (e.g., `LAB 7- Node Js`) somewhere on your computer.

---

## 3. **Open the Project in VS Code**
- Open **Visual Studio Code**.
- Go to **File > Open Folder...** and select your project folder.

---

## 4. **Install Dependencies**
- Open the **terminal** in VS Code (`Ctrl + ``).
- Run:
  ```
  npm init -y
  npm install express ejs
  ```

---

## 5. **Check Project Structure**
Your folder should look like:
```
LAB 7- Node Js/
│
├── public/
│   ├── index page.html
│   ├── Message Submission Page.html
│   ├── Message Display Page.html
│   ├── css/
│   └── js/
├── views/
│   └── Message Display Page.ejs
├── server.js
├── package.json
```

---

## 6. **Run the Server**
- In the terminal, run:
  ```
  node server.js
  ```
- If you want automatic restarts on file changes, install nodemon:
  ```
  npm install -g nodemon
  nodemon server.js
  ```

---

## 7. **Open in Browser**
- Open your browser and go to:  
  [http://localhost:3000](http://localhost:3000)

---

## 8. **Usage**
- **Home:** `/` or `/home`
- **Submit a Message:** `/submit`
- **View Messages:** `/view`

---
