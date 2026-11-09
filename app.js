
const express = require("express");

const app = express();

app.use(express.json());

const employees = [
  { id: 1, name: "Satish", role: "Team Lead" },
  { id: 2, name: "Rahul", role: "Developer" }
];

app.get("/", (req, res) => {
  res.send("Welcome to Employee Management Application");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/health", (req, res) => {
  res.json({ status: "Application is running" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
