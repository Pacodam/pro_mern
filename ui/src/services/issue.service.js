import http from "./http-common";

class IssueDataService {
  getAll(vars) {
    return http.get("/issues", {params: {vars}});
  }

  create(data) {
    return http.post("/issues", data);
  }

  get(id) {
      return http.get(`/issues/${id}`)
  }
}

export default new IssueDataService();
