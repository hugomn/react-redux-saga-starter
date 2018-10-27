import axios from "axios";

const url = "https://polls.apiblueprint.org";

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
