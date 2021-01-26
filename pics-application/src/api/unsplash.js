import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6Fuq_RCwzanr3o1c25UDgIkiByS0VJpO78QZ32nyEco",
  },
});
