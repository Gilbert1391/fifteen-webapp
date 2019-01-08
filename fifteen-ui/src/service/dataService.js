import http from "./httpService";

const apiEndPoint = "/menus";

export function getItems() {
  return http.get(apiEndPoint);
}

export function getItem(itemId) {
  return http.get(apiEndPoint + "/" + itemId);
}

export function saveItem(item) {
  if (item._id) {
    const body = { ...item };
    delete body._id;
    return http.put(apiEndPoint + "/" + item._id, body);
  }

  return http.post(apiEndPoint, item);
}

export function deleteItem(itemId) {
  return http.delete(apiEndPoint + "/" + itemId);
}

export function getHeading() {
  return http.get("/heading");
}

export function saveHeading(item) {
  const body = { ...item };
  delete body._id;
  return http.put("/heading/" + item._id, body);
}
