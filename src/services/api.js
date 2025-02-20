import axios from "axios";

const API_BASE_URL = "https://taskflow-backend-v9lx.onrender.com/api/todos"; // Ensure backend matches this

export const addTodo = async (text) => {
    const response = await axios.post(API_BASE_URL, { title: text, status: false }); 
    return response.data;
};

export const updateTodo = async (id, completed) => {
    const response = await axios.put(`${API_BASE_URL}/${id}`, { status: completed }); 
    return response.data;
};

export const fetchTodos = async () => {
    const response = await axios.get(API_BASE_URL); // ✅ Changed fetch → axios for consistency
    return response.data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`); // ✅ Changed fetch → axios
};
