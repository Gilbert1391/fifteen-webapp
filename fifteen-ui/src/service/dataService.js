import http from "./httpService";

const apiEndPoint = "http://localhost:3900/api/menus";

export function getItems() {
  return http.get(apiEndPoint);
}

export function deleteItem(itemId) {
  return http.delete(apiEndPoint + "/" + itemId);
}

export function getHeading() {
  return http.get("http://localhost:3900/api/headings");
}
