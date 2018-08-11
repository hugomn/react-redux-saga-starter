import axios from "axios";

const url = "https://private-anon-df7d89436c-pollsapi.apiary-proxy.com";

const api = {
  getQuestion: function(id) {
    return axios.get(`${url}/questions/${id}`);
  },
  getQuestions: function() {
    return axios.get(`${url}/questions`);
  },
  postChoice: function(choiceUrl) {
    return axios.post(`${url}${choiceUrl}`);
  }
};

export default api;
