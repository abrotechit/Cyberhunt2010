import dotenv from "dotenv";

dotenv.config();

const {
  IS_LIVE,
  REACT_APP_CORPORATE_APP,
  REACT_APP_PERSONAL_APP,
  REACT_APP_BASE_URL,
} = process.env;

export const envConfig = {
  isLive: IS_LIVE === "live",
  corporateAppUrl: REACT_APP_CORPORATE_APP || "https://business.wayabank.ng",
  personalAppUrl: REACT_APP_PERSONAL_APP || "https://ibank.wayabank.ng",
  baseUrl: REACT_APP_BASE_URL || "https://services.wayabank.ng",
};
