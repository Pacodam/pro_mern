import http from "./http-common";

class IssueDataService {
  getAll() {
    return http.get("/issues");
  }

  create(data) {
    return http.post("/issues", data);
  }

  // get(id) {
  //     return http.get(`/tutorials/${id}`)
  // }
}

export default new IssueDataService();
