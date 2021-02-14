export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = "http://localhost:3000/api/v1/register";

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/token`;

  const parameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      localStorage.setItem("token", json.access);
      return json;
    });
};

export const tokenVerifyService = (request) => {
  const VERIY_API_ENDPOINT = `${process.env.REACT_APP_API_URL}/token/verify`;
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return fetch(VERIY_API_ENDPOINT, parameters)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
};
