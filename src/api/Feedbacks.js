import { BASE_URL } from "./Const";
import { getJSON } from "./Network";
export async function getFeedbacks() {
    const url = `${BASE_URL}/feedbacks`;
    const feedbacks = getJSON(url).then(result => result.$values);
    return feedbacks;
}

export async function getFeedbackById(id) {
    const url = `${BASE_URL}/feedbacks/${id}`;
    const feedback = getJSON(url).then(result => result);
    return feedback;
}
export async function getFeedbackTypes() {
    const url = `${BASE_URL}/feedbacks/type`;
    const feedbackTypes = getJSON(url).then(result => result.$values);
    return feedbackTypes;
}

export async function getFeedbackTypeById(feedbackTypeId) {
    const url = `${BASE_URL}feedbacks/type/${feedbackTypeId}`;
    const feedbackType = getJSON(url).then(result => result);
    return feedbackType;
}