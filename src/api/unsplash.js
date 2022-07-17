import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID S5Fhg4TvI7b-c0KHMnhPVUz20KEd12S6PwqnEG7CoT8",
  },
});
