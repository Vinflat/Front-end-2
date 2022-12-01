import { BASE_URL } from "./Const";
import { getJSON, postJSON } from "../services/Network";

export async function getContracts() {
  const url = `${BASE_URL}/contracts?PageNumber=1&PageSize=1000`;
  const contracts = getJSON(url).then((result) => result.$values);
  return contracts;
}

export async function getContractById(id) {
  const url = `${BASE_URL}/contracts/${id}`;
  const contract = getJSON(url).then((result) => result);
  return contract;
}
//TODO check the response to get the result, currently this endpoint doesn't return value
export async function getContractByRenter(renterId) {
  const url = `${BASE_URL}/contracts/${renterId}/user`;
  const contract = getJSON(url).then((result) => result);
  return contract;
}

export async function getContractHistories() {
  const url = `${BASE_URL}/histories`;
  const histories = getJSON(url).then((result) => result.$values);
  return histories;
}

export async function getContractHistoryByUser(renterId) {
  const url = `${BASE_URL}/contracts/user/${renterId}/history`;
  const histories = getJSON(url).then((result) => result);
  return histories;
}

export async function getContractHistory(contractId) {
  const url = `${BASE_URL}/contracts/history/${contractId}`;
  const contractHisroty = getJSON(url).then((result) => result);
  return contractHisroty;
}

export async function createContractJsonApi(contract) {
  const url = `${BASE_URL}/contracts/sign`;
  const createdContract = postJSON(url, contract).then((result) => result);
  return createdContract;
}
