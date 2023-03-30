import axios from "axios";

const settings = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    ...settings,
});

export const quizApi = {

    getQuizeQuestions() {
        return apiInstance.get(`quizzes?populate=deep`);
    },
};

export const meetingApi = {
    getMeetingData() {
        return apiInstance.get("meeting?populate=deep");
    },
};
export const photoApi = {
    getPhotoData() {
        return apiInstance.get("photo-galleries?populate=deep");
    },
};
