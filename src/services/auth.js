import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  return apiClient.post("/auth/register", payload);
};

export const apiLogin = async (payload) => {
  return apiClient.post("/auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// export const apiLogin = async (payload) => {
//   apiClient.post("/users/login", payload, {
//     headers: {
//       "content-type": "application/json",
//   };
// });
// }
