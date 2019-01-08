import http from "./httpService";

const apiEndPoint = "/auth";

export function login(username, password) {
  return http.post(apiEndPoint, { username, password });
}
