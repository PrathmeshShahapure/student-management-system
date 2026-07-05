import api from './axios'

export const getStudents = async (params) => { 
    const response = await api.get("/students", { params });
    return response.data;
}