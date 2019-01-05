import http from "./httpService";

const apiEndPoint = "http://localhost:3900/api/auth";

export function login(username, password) {
  return http.post(apiEndPoint, { username, password });
}
