import http from "./http-common";


class DeleteIssueDataService {
    create(data) {
        return http.post("/deleted_issues", data);
    }
}

export default new DeleteIssueDataService();