import axios from 'axios';
const HOST = import.meta.env.VITE_HOST
const TOKEN = localStorage.getItem("aiScribeAuthToken")

const createServerRequest = async (method, url, data) => {
    try {
        console.log(data);
        const api = `${HOST}${url}`;
        const response = await axios({
            method: method,
            url: api,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            data: JSON.stringify(data)
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log("Server Error Response Data:", error.response.data);
            console.log("Server Error Response Status:", error.response.status);
            return error.response.data;
        } else {
            console.log("Server Error:", error.message);
            return "An error occurred while making the request";
        }
        
    }
}

export default createServerRequest