import api from "./axios";

export const getStudents = async (params) => {
  const response = await api.get("/students", { params });
  return response.data;
};

export const createStudent = async (studentData) => {
  const response = await api.post("/students", studentData);

  return response.data;
};