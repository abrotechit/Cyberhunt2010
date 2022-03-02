import axios from "axios";
import swal from "sweetalert";
import { NotificationManager } from "react-notifications";
import { envConfig } from "../utils/envConfig";
// import { hideLoader } from '../utils/loader';

let baseUrl = envConfig.baseUrl;

const wayagramUrl = `${baseUrl}/wayagram-service`;
const authUrl = `${baseUrl}/auth-service`;
const kycUrl = `${baseUrl}/kyc-service`;
const bvnUrl = `${baseUrl}/bvn-service`;
const cardUrl = `${baseUrl}/card-service`;
const contactUrl = `${baseUrl}/contact-service`;
const billPaymentUrl = `${baseUrl}/billspayment-service`;
const walletUrl = `${baseUrl}/temporal-service`;
const paymentRequestUrl = `${baseUrl}/payment-request`;
const accountCreationUrl = `${baseUrl}/account-service`;
const roleUrl = `${baseUrl}/role-service`;
const withdrawalUrl = `${baseUrl}/withdrawal-service`;
const ussdUrl = `${baseUrl}/ussd-service`;
const disputeUrl = `${baseUrl}/social-dispute`;
const socketUrl = `${baseUrl}/chats-service`;
const logUrl = `${baseUrl}/logs-service`;
const wayapayDispute = `${baseUrl}/complaint-service`;
const contentManagementUrl = `${baseUrl}/content-management-service`;
const notificationUrl = `${baseUrl}/notification-service`;
const fileResourseUrl = `${baseUrl}/file-resource-service`;
const ussdTopUp = `${baseUrl}/ussd-middle-ware`;

export const customBaseUrl = {
  wayagramUrl,
  authUrl,
  kycUrl,
  bvnUrl,
  cardUrl,
  contactUrl,
  billPaymentUrl,
  ussdUrl,
  walletUrl,
  paymentRequestUrl,
  accountCreationUrl,
  roleUrl,
  withdrawalUrl,
  disputeUrl,
  // generateUssdUrl,
  socketUrl,
  logUrl,
  wayapayDispute,
  contentManagementUrl,
  notificationUrl,
  fileResourseUrl,
  ussdTopUp,
};

if (process.env.REACT_APP_NODE_ENV === "development") {
  baseUrl = "http://127.0.0.1:8080";
}

export const httpPost = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.post(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              "content-type": "application/json",
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    // hideLoader();
    if (error?.response?.data.error === "Internal Server Error") {
      return {
        status: false,
        message: error.response.data.error,
      };
    }
    if (error?.response?.data.message === "Validation Errors") {
      Object.values(error.response.data.data).map((item) =>
        NotificationManager.error(item, "Oops!", 5000)
      );
      return {
        status: false,
        message: error.response?.data.data[0],
      };
    }
    return error.response?.data;
  }
};

export const httpPostUnreloaded = async (
  url,
  postBody,
  otherUrl,
  isNotAuth
) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.post(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    return error.response?.data;
  }
};

export const httpPostFormData = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.post(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    return error.response?.data;
  }
};

export const httpGet = async (url, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.get(
      url,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    if (error?.response?.data?.message === "Validation Errors") {
      Object.values(error?.response?.data?.data).map((item) =>
        swal("Oops!", item, "error")
      );
      return {
        status: false,
        message: error?.response?.data.data[0],
      };
    }
    return error?.response?.data;
  }
};

export const httpPut = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.put(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    if (error.response.data.message === "Validation Errors") {
      return {
        status: false,
        message: error.response?.data.data[0],
      };
    }
    return error.response?.data;
  }
};

export const httpPatch = async (url, postBody, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.patch(
      `${otherUrl || baseUrl}${url}`,
      postBody,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
          }
        : {}
    );
    return res.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const httpDelete = async (url, data, otherUrl, isNotAuth) => {
  if (!navigator.onLine) {
    return NotificationManager.error(
      "Please check your internet",
      "Oops!",
      3000
    );
  }
  try {
    const res = await axios.delete(
      `${otherUrl || baseUrl}${url}`,
      !isNotAuth
        ? {
            headers: {
              Authorization: `${localStorage.token}`,
            },
            data,
          }
        : {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    // hideLoader();
    return error.response?.data;
  }
};
