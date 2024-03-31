import { create } from "apisauce";
import authStorage from "../auth/Store";

const apiClient = create({
  baseURL: "http://10.11.106.191:3100",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;
