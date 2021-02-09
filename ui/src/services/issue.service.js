import http from "./http-common";

class IssueDataService {
  getAll(vars) {
    return http.get("/issues", { params: { vars } });
  }

  create(data) {
    return http.post("/issues", data);
  }

  get(id) {
    return http.get(`/issues/${id}`);
  }

  update(id, data) {
    return http.put(`/issues/${id}`, data);
  }

  delete(id) {
    return http.delete(`/issues/${id}`);
  }

  countIssues() {
    return http.get('/issues/count');
  }
}

export default new IssueDataService();
