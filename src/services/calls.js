import { customBaseUrl, httpGet } from "./http";

export const getBusinessTypes = async () => {
  const res = await httpGet(
    `${customBaseUrl.authUrl}/api/v1/business/type/find/all`
  );
  // console.log(res);
  return res;
};
