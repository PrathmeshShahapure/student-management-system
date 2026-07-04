import { Router } from "express";
import { createStudent ,getStudents,getStudentById,} from "../controllers/studentController.js";

const router = Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
export default router;
