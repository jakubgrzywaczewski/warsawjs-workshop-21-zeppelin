const API_URL = "https://warsawjs-21-api.herokuapp.com";

function transformJsonResponse(response) {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response.json();
}

export function login({ username, password }) {
  return fetch(`${API_URL}/auth`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(transformJsonResponse);
}

export function readPosts() {
  return fetch(`${API_URL}/posts`, {
    method: "GET"
  }).then(transformJsonResponse);
}

export function createPost({ username, title, image }) {
  const body = new FormData();
  body.append("username", username);
  body.append("title", title);
  body.append("image", image);

  return fetch(`${API_URL}/posts`, {
    method: "POST",
    body
  }).then(transformJsonResponse);
}

export function readPost(postId) {
  return fetch(`${API_URL}/posts/${postId}`, {
    method: "GET"
  }).then(transformJsonResponse);
}

export function createComment({ postId, username, body, position: { x, y } }) {
  return fetch(`${API_URL}/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ postId, username, body, position: { x, y } })
  }).then(transformJsonResponse);
}
