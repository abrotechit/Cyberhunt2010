import axios from "axios";
import apiClient from "./axios";

// how it works
export async function getSiteApi(url) {
  return apiClient
    .get(url)
    .then((response) => {
      if (response) {
        const { data, status } = response;
        if (status) {
          return data;
        }
      }
      return false;
    })
    .catch((err) => console.log(err));
}

export async function sendData(payload) {
  const { data } = payload;
  const url =
    "https://services.staging.mywayapay.com/notification-service/v2/api-docs/email-notification";
  const mailData = {
    data: {
      message: data.message,
      names: [{ email: data.email, fullName: data.name }],
      subject: data.subject,
    },
    eventType: "EMAIL",
    initiator: data.email,
  };
  return axios
    .post(url, mailData)
    .then((response) => {
      if (response) {
        const { data, status } = response;
        if (status) {
          return data;
        }
      }
      return false;
    })
    .catch((err) => console.log(err));
}

export async function authRequest(payload) {
  return axios
    .post(`${process.env.REACT_APP_API_URL}${payload.url}`, payload.data)
    .then((response) => {
      if (response) {
        const { data, status } = response;
        if (status) {
          return data;
        }
      }
      return false;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}

export async function getData(url) {
  return axios
    .get(`${process.env.REACT_APP_API_URL}${url}`)
    .then((response) => {
      if (response) {
        const { data, status } = response;
        if (status) {
          return data;
        }
      }
      return false;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
