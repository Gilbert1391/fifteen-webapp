import http from "./httpService";

export function getData() {
  return http.get("http://localhost:3900/api/menus");
}

export function getHeading() {
  return http.get("http://localhost:3900/api/headings");
}
