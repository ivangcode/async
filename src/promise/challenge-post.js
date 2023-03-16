const API_URL = "https://api.escuelajs.co/api/v1";

const data = {
  title: "212",
  price: 212,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

const dataPost = (data) => {
  const headers = {
    'method': "POST",
    'mode': "cors",
    'credentials': "same-origin",
    'header': {
      "Content Type": "application/json",
    },
    'body': JSON.stringify(data),
  };
  return headers;
};

fetch(API_URL, dataPost(data))
  .then(res => console.log(res))
  .catch(err => console.log(err));
