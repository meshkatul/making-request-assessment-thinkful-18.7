const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";



//The index() function should return all of the constellation resources.
function index() {
  const url = `${BASE_URL}/constellations`;
  return axios
  .get(url)
  .then((response) => {
    console.log (response.data);
  })
  .catch((error) => {
    console.log(error.message);
  })
}
//The create() function should take an object, body, and create a new constellation.
function create(body) {
  const url = `${BASE_URL}/constellations`;
  return axios
  .post(url, body)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  })
}

//The show() function should take an id and return a constellation for the given constellation.
function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
  .get(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  })
}

//The update() function should take an id and an object, body, and update the given constellation.
function update(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
  .put(url, body)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  })

}

//The destroy() function should take an id destroy the given constellation.
function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios
  .delete(url)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  })
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
