import axios from "axios";
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  RegisterUser(userData) {
    return this.client.post(this.url + "/users", userData);
  }
  getMessages(limit = 10) {
    return this.client.get(this.url + `/messages?limit=${limit}`);
  }
}
export default new DataService();
