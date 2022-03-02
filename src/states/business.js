import { selector } from "recoil";
import { getData, getSiteApi } from "../services/apiCalls";

export const getMerchants = selector({
  key: "getMerchants",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("business/merchant");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  },
});

export const getAgents = selector({
  key: "getAgents",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("business/agent");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  },
});

export const getHowToJoin = selector({
  key: "getHowToJoin",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("business/agent/how_to_join");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  },
});

export const getBusinessType = selector({
  key: "getBusinessType",
  get: async ({ get }) => {
    try {
      const result = await getData("business/type/find/all");
      return result || [];
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return [];
    }
  },
});

// http://68.183.60.114:8059/api/v1/
