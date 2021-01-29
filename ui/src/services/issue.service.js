import http from "../helpers/http-common";

class IssueDataService{
  
    getAll() {
        return http.get("/issues");
    }

    create(data){
        return http.post("/issue")
    }
}

export default new IssueDataService();