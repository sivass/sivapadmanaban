import apiClient from "@/lib/apiClient";

export const getMenu = async () => {
  return apiClient.get("/menu");
};
