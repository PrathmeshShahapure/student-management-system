import express from "express";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Student Management API is running",
  });
});

app.use("/api/students", studentRoutes);

export default app;
