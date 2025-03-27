import { apiClient } from "./config";

export const apiAddAdvert = async (payload) =>
  apiClient.post("/adverts", payload);

export const apiGetAllAdverts = async () => apiClient.get("/adverts");

export const apiGetVendorAdverts = async () => apiClient.get("/adverts/vendor");

export const apiUpdateAdvert = async (id, payload) =>
  apiClient.patch(`/adverts/${id}`, payload);

export const apiGetSingleAdvert = async (id) => apiClient.get(`/adverts/${id}`);

export const apiDeleteAdvert = async (id) => apiClient.delete(`/adverts/${id}`);

// export const apiGetSingleAdvert = async (id) => apiClient.get(`/adverts/${id}`,{
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });
