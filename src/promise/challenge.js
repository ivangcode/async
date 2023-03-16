import fetch from "node-fetch";

const API_URL = "https://api.escuelajs.co/api/v1";

// Promise then

fetch(`${API_URL}/products`)
  .then((res) => res.json())
  .then((products) => console.log(products))
  .catch((error) => console.log(error));

// Async await

async function getData(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}
getData(`${API_URL}/products`);
