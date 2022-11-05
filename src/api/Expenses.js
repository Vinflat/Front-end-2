import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getExpenses() {
    const url = `${BASE_URL}/expenses`;
    const expenses = getJSON(url).then(result => result.$values);
    return expenses;
}

export async function getExpenseById(id) {
    const url = `${BASE_URL}/expenses/${id}`;
    const expense = getJSON(url).then(result => result);
    return expense;
}

export async function getExpenseHistories(){
    const url = `${BASE_URL}/expenses/history`;
    const expenseHistories = getJSON(url).then(result => result.$values);
    return expenseHistories;
}

export async function getExpenseHistoryByExpenseHistoryId(expenseHistoryId){
    const url = `${BASE_URL}/expenses/history/${expenseHistoryId}`;
    const expenseHistory = getJSON(url).then(result => result.$values);
    return expenseHistory;
}

export async function getExpenseList(){
    const url = `${BASE_URL}/expenses/type`;
    const response = getJSON(url).then(result => result.$values);
    return response
}

//TODO check this endpoint response to get the right value 
export async function getExpenseTypeById(id){
    const url = `${BASE_URL}/expenses/type/${id}`;
    const response = getJSON(url).then(result => result);
    return response;
}


