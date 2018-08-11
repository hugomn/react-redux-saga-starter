import axios from "axios";

const url = "https://private-anon-df7d89436c-pollsapi.apiary-proxy.com";

const api = {
  getQuestions: function(payload) {
    return axios.get(`${url}/questions`, payload);
  }
};

export default api;
