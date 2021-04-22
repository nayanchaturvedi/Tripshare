import axios from "axios";

class RegisterServices {
  createUser(user) {
    console.log("service " + user.firstname);
    return axios.post("http://localhost:8085/api/v1/employees", user);
  }
}

export default new RegisterServices();
