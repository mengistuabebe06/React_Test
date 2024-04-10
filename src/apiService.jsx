import axios from "axios";

const BASE_URL =
  "https://100085.pythonanywhere.com/uxlivinglab/newsletter/v1/e532096f-6cb1-4dbf-b6f8-a5b9767d6c8e/?type=subscriberlist";

const apiService = axios.create({
  baseURL: BASE_URL,
});

export const fetchEndpoints = async () => {
  try {
    const response = await apiService.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching endpoints:", error);
    throw error;
  }
};

export default apiService;
