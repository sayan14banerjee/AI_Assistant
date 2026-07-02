import axios from "axios";

const API_URL = "http://localhost:8000";

export const sendMessage = async (message: string) => {

    try {
        const response = await axios.post(`${API_URL}/chat`, 
            { 
                message 
            });

        return response.data.response;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
};


