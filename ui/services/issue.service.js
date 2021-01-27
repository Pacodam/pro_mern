import http from "../helpers/http-common";

class IssueDataService{
  
    getAll() {
        return http.get("/issues");
    }
}

export default new IssueDataService();