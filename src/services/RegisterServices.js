import axios from "axios";

class RegisterServices {
  createUser(user) {
    console.log("service " + user.firstName);
    return axios.post("http://localhost:8085/registration", user);
  }
}

export default new RegisterServices();
