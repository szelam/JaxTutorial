import axios from "axios";
import { API_URL } from "../constants/api";
import { CARPARK_ID, MERCHANT_ID, SERVICEPLAN_ID } from "../constants/time";

export async function getHolidays(token) {
  const response = await axios.get(`${API_URL}/holiday?status=active`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.records;
}

export async function getServicePlan(token) {
  const response = await axios.get(
    `${API_URL}/servicePlan/${SERVICEPLAN_ID}?Carpark=${CARPARK_ID}&_populate=quota&Merchant=${MERCHANT_ID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.records;
}

export async function getPolicyPlan(token, id) {
  const response = await axios.get(
    `${API_URL}/policyPlan/${id}?_populate=HourlyPolicies`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.records;
}

export async function getAvailability(token) {
  const response = await axios.get(
    `${API_URL}/carpark/${CARPARK_ID}/ev/availability`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.records;
}

export async function getBookedPeriods(token, fromTimeStr, toTimeStr) {
  const response = await axios.get(
    `${API_URL}/servicePlan/${SERVICEPLAN_ID}/bookedPeriods?Merchant=${MERCHANT_ID}&from=${fromTimeStr}&to=${toTimeStr}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.records;
}
