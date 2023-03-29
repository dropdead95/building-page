import axios from "axios";

const settings = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const apiInstance = axios.create({
  baseURL: "http://localhost:1337/api",
  ...settings,
});

export const quizApi = {
  getQuizeQuestions() {
    return apiInstance.get(`quis?populate=deep`);
  },
};

export const meetingApi = {
  getMeetingData() {
    return apiInstance.get("meeting?populate=deep");
  },
};
